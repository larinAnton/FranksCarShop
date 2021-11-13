using System.Collections.Generic;
using System.Linq;
using FranksCarShop.Stores.WarehouseStore.DataStructures;
using Microsoft.EntityFrameworkCore;

namespace FranksCarShop.Stores.WarehouseStore
{
    public class WarehouseDbContext : DbContext, IWarehouseStore
    {
        public DbSet<Car> Cars { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }

        public WarehouseDbContext(DbContextOptions<WarehouseDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>().Property(car => car.Id).ValueGeneratedNever();
            modelBuilder.Entity<Car>().Property(car => car.Price).HasColumnType("decimal(18,4)");
            modelBuilder.Entity<Warehouse>().Property(warehouse => warehouse.Id).ValueGeneratedNever();

            modelBuilder.Entity<GeographicLocation>().Property(location => location.Latitude)
                .HasColumnType("decimal(18,4)");
            modelBuilder.Entity<GeographicLocation>().Property(location => location.Longitude)
                .HasColumnType("decimal(18,4)");
        }

        public IEnumerable<Car> GetCars()
        {
            return Cars;
        }

        public Warehouse GetWarehouseByCarId(int carId)
        {
            return Warehouses.First(warehouse => warehouse.Cars.Any(car => car.Id == carId));
        }
    }
}