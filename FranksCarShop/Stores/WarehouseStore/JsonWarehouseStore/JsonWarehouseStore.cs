using System;
using System.Collections.Generic;
using System.Linq;
using FranksCarShop.Stores.WarehouseStore.DataStructures;

namespace FranksCarShop.Stores.WarehouseStore.JsonWarehouseStore
{
    internal class JsonWarehouseStore: IWarehouseStore
    {
        private readonly IEnumerable<Warehouse> _warehouses;

        public JsonWarehouseStore(JsonWarehouseParser parser, ResourceProvider provider)
        {
            //TODO move to configs
            var warehousesJson = provider.GetResource("warehouses.json");
            _warehouses = parser.Parse(warehousesJson);
        }
        
        public IEnumerable<Car> GetCars()
        {
            return _warehouses.SelectMany(warehouse => warehouse.Cars);
        }
    }
}