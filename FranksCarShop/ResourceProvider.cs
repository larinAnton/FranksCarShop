using System.IO;
using System.Linq;
using System.Reflection;

namespace FranksCarShop
{
    public class ResourceProvider
    {
        public string GetResource(string resourceFileName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var fullPath = assembly.GetManifestResourceNames().First(name => name.Contains(resourceFileName));

            using var resourceStream = assembly.GetManifestResourceStream(fullPath);
            using var reader = new StreamReader(resourceStream);

            return reader.ReadToEnd();
        }
    }
}