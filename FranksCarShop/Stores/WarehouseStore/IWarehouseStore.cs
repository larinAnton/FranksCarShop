using System.Collections.Generic;
using System.Linq;
using FranksCarShop.Stores.WarehouseStore.DataStructures;

namespace FranksCarShop.Stores.WarehouseStore
{
    public interface IWarehouseStore
    {
        public IQueryable<Car> GetCars(int take, int page = 0);
        Warehouse GetWarehouseByCarId(int carId);
    }
}