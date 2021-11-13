using System.Collections.Generic;

namespace FranksCarShop.Stores.WarehouseStore.DataStructures
{
    public class Warehouse
    {
        public Warehouse()
        {
            Cars = new List<Car>();
        }
        
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Car> Cars { get; set; }
        public virtual GeographicLocation GeographicLocation { get; set; }
    }
}