using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using FranksCarShop.Stores.WarehouseStore.DataStructures;
using Xunit;
using FluentAssertions;

namespace FranksCarShopTests.Stores.WarehouseStore.JsonWarehouseStore
{
    using FranksCarShop.Stores.WarehouseStore.JsonWarehouseStore;

    public class JsonWarehouseStoreTest
    {
        private readonly JsonWarehouseParser _parser;
        private const string TestResourceName = "warehouses.test.json";

        public JsonWarehouseStoreTest()
        {
            _parser = new JsonWarehouseParser();
        }

        [Fact]
        public void parser_should_return_expected_value()
        {
            var warehouses = _parser.Parse(GetTestData());
            warehouses.Should().BeEquivalentTo(GetExpectedData());
        }

        private IEnumerable<Warehouse> GetExpectedData()
        {
            var car = new Car()
            {
                Id = 1,
                Make = "make",
                Model = "model",
                YearModel = new DateTime(1, 1, 1),
                Price = 1,
                Licensed = true,
                DateAdded = new DateTime(2021, 9, 18),
                Location = "location"
            };
            
            var warehouse = new Warehouse()
            {
                Id = 1,
                Name = "name",
                GeographicLocation = new GeographicLocation() { Latitude = 1, Longitude = 1 },
                Cars = new[] { car }
            };
            
            return new[] { warehouse };
        }

        private string GetTestData()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var fullPath = assembly.GetManifestResourceNames().First(name => name.Contains(TestResourceName));

            using var resourceStream = assembly.GetManifestResourceStream(fullPath);
            using var reader = new StreamReader(resourceStream);

            return reader.ReadToEnd();
        }
    }
}