using System.Collections.Generic;

namespace FranksCarShop.Stores.WarehouseStore.DataStructures
{
    public class Warehouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public IEnumerable<Car> Cars { get; set; }
        
        public GeographicLocation GeographicLocation { get; set; }
    }
}