namespace FranksCarShop.Stores.WarehouseStore.DataStructures
{
    public class GeographicLocation
    {
        public int Id { get; set; }
        public int WarehouseId { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public Warehouse Warehouse { get; set; }
    }
}