using System;

namespace FranksCarShop.Stores.WarehouseStore.DataStructures
{
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public DateTime YearModel { get; set; }
        
        //TODO: currency?
        public decimal Price { get; set; }
        public bool Licensed { get; set; }
        public DateTime DateAdded { get; set; }
        public string Location { get; set; }
        
    }
}