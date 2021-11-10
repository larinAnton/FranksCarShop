using System.Collections.Generic;
using FranksCarShop.Stores.WarehouseStore.DataStructures;

namespace FranksCarShop.Stores.WarehouseStore
{
    public interface IWarehouseStore
    {
        public IEnumerable<Car> GetCars();
        Warehouse GetWarehouseByCarId(int carId);
    }
}