using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FranksCarShop.Stores;
using FranksCarShop.Stores.WarehouseStore;
using FranksCarShop.Stores.WarehouseStore.JsonWarehouseStore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace FranksCarShop
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            await CreateDbIfNotExists(host);

            await host.RunAsync();
        }

        private static async Task CreateDbIfNotExists(IHost host)
        {
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            var logger = services.GetRequiredService<ILogger<Program>>();
            try
            {
                logger.LogInformation("Initializing DB...");
                var dbContext = services.GetRequiredService<WarehouseDbContext>();
                var parser = services.GetRequiredService<JsonWarehouseParser>();
                var resourceProvider = services.GetRequiredService<ResourceProvider>();

                var dbInitializer = new DbInitializer(dbContext, parser, resourceProvider);
                await dbInitializer.Init();

                logger.LogInformation("Db initialized");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while initializing the DB");
                throw;
            }
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureKestrel((options) =>
                    {
                        options.ConfigureEndpointDefaults(lo => lo.Protocols = HttpProtocols.Http1);
                    });
                    webBuilder.UseStartup<Startup>();
                });
    }
}