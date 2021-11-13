using System.Linq;
using System.Threading.Tasks;
using FranksCarShop.Stores.WarehouseStore;
using FranksCarShop.Stores.WarehouseStore.JsonWarehouseStore;

namespace FranksCarShop.Stores
{
    public class DbInitializer
    {
        private readonly WarehouseDbContext _warehouseDbContext;
        private readonly JsonWarehouseParser _jsonWarehouseParser;
        private readonly ResourceProvider _resourceProvider;

        public DbInitializer(
            WarehouseDbContext warehouseDbContext,
            JsonWarehouseParser jsonWarehouseParser,
            ResourceProvider resourceProvider)
        {
            _warehouseDbContext = warehouseDbContext;
            _jsonWarehouseParser = jsonWarehouseParser;
            _resourceProvider = resourceProvider;
        }

        public async Task Init()
        {
            var data = _resourceProvider.GetResource("warehouses.json");
            var warehouses = _jsonWarehouseParser.Parse(data);

            await _warehouseDbContext.Database.EnsureCreatedAsync();
            if (!_warehouseDbContext.Warehouses.Any())
            {
                await _warehouseDbContext.Warehouses.AddRangeAsync(warehouses);
                await _warehouseDbContext.SaveChangesAsync();
            }
        }
    }
}