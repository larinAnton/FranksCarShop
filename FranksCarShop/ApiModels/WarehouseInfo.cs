using System.Collections.Generic;
using FranksCarShop.Stores.WarehouseStore.DataStructures;

namespace FranksCarShop.ApiModels
{
    public class WarehouseInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public GeographicLocation GeographicLocation { get; set; }
    }
}