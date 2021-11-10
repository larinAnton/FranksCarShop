using System.Collections.Generic;
using System.Linq;
using FranksCarShop.ApiModels;
using FranksCarShop.Stores;
using FranksCarShop.Stores.WarehouseStore;
using FranksCarShop.Stores.WarehouseStore.DataStructures;
using Microsoft.AspNetCore.Mvc;

namespace FranksCarShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WarehouseController : ControllerBase
    {
        private IWarehouseStore _warehouseStore;

        public WarehouseController(IWarehouseStore warehouseStore)
        {
            _warehouseStore = warehouseStore;
        }

        [Route("cars")]
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return _warehouseStore.GetCars().OrderBy(car => car.DateAdded);
        }

        [Route("warehouseInfo")]
        [HttpGet]
        public WarehouseInfo GetWarehouseInfoByCarId(int carId)
        {
            var warehouse = _warehouseStore.GetWarehouseByCarId(carId);
            return new WarehouseInfo()
            {
                GeographicLocation = warehouse.GeographicLocation,
                Id = warehouse.Id,
                Name = warehouse.Name
            };
        }
    }
}