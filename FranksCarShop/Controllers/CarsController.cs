using System.Collections.Generic;
using FranksCarShop.Stores;
using FranksCarShop.Stores.WarehouseStore;
using FranksCarShop.Stores.WarehouseStore.DataStructures;
using Microsoft.AspNetCore.Mvc;

namespace FranksCarShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private IWarehouseStore _warehouseStore;

        public CarsController(IWarehouseStore warehouseStore)
        {
            _warehouseStore = warehouseStore;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return _warehouseStore.GetCars();
        }
    }
}