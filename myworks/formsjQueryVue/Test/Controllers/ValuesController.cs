using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Test.Controllers
{
    public class Person
    {
        public string Name { get; set; }
        public int? Age { get; set; }
        public bool? IsMarried { get; set; }
        public int? NumberOfKids { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("All")]
    public class ValuesController : ControllerBase
    {
        private static Dictionary<int, Person> _data =
            new Dictionary<int, Person>()
            {
                { 1, new Person { Name = "John", Age = 25, IsMarried = true, NumberOfKids = 1 } },
                { 2, new Person { Name = "Sara", Age = 18, IsMarried = false } }
            };

        // GET api/values
        [HttpGet]
        public ActionResult<Dictionary<int, string>> Get()
        {
            return _data.ToDictionary(k => k.Key, v => v.Value.Name);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Person> Get(int id)
        {
            return _data.ContainsKey(id) ? _data[id] : null;
        }

        // POST api/values
        [HttpPost]
        [IgnoreAntiforgeryToken]
        public void Post(Person value)
        {
            _data.Add(_data.Any() ? _data.Max(k => k.Key) + 1 : 1, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [IgnoreAntiforgeryToken]
        public void Put(int id, Person value)
        {
            _data[id] = value;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [IgnoreAntiforgeryToken]
        public void Delete(int id)
        {
            _data.Remove(id);
        }
    }
}
