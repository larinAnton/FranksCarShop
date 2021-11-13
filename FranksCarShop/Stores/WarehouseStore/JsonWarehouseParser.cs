using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using FranksCarShop.Stores.WarehouseStore.DataStructures;
using Newtonsoft.Json.Linq;

namespace FranksCarShop.Stores.WarehouseStore.JsonWarehouseStore
{
    public class JsonWarehouseParser
    {
        private const string IdField = "_id";
        private const string NameField = "name";
        private const string LocationField = "location";
        private const string LatitudeField = "lat";
        private const string LongitudeField = "long";
        private const string CarsField = "cars";
        private const string VehiclesField = "vehicles";
        private const string MakeField = "make";
        private const string ModelField = "model";
        private const string YearModelField = "year_model";
        private const string PriceField = "price";
        private const string LicensedField = "licensed";
        private const string DateAddedField = "date_added";
        private const string dateFormat = "yyyy-MM-dd";

        public IEnumerable<Warehouse> Parse(string warehousesJson)
        {
            var warehousesJArray = JArray.Parse(warehousesJson);

            return warehousesJArray.Select(ParseWarehouse);
        }

        private Warehouse ParseWarehouse(JToken warehouseJToken)
        {
            return new Warehouse()
            {
                Id = warehouseJToken.Value<int>(IdField),
                Name = warehouseJToken.Value<string>(NameField),
                GeographicLocation = ParseLocation(warehouseJToken[LocationField]),
                Cars = ParseCars(warehouseJToken[CarsField])
            };
        }

        private GeographicLocation ParseLocation(JToken locationJToken)
        {
            return new GeographicLocation()
            {
                Latitude = locationJToken.Value<decimal>(LatitudeField),
                Longitude = locationJToken.Value<decimal>(LongitudeField)
            };
        }

        private ICollection<Car> ParseCars(JToken carsJToken)
        {
            var location = carsJToken.Value<string>(LocationField);
            return carsJToken[VehiclesField].Select(carJToken => ParseCar(carJToken, location)).ToArray();
        }

        private Car ParseCar(JToken carJToken, string location)
        {
            return new Car()
            {
                Id = carJToken.Value<int>(IdField),
                Make = carJToken.Value<string>(MakeField),
                Model = carJToken.Value<string>(ModelField),
                YearModel = new DateTime(carJToken.Value<int>(YearModelField), 1, 1),
                Price = carJToken.Value<decimal>(PriceField),
                Licensed = carJToken.Value<bool>(LicensedField),
                DateAdded = DateTime.ParseExact(carJToken.Value<string>(DateAddedField), dateFormat,
                    CultureInfo.InvariantCulture),
                Location = location
            };
        }
    }
}