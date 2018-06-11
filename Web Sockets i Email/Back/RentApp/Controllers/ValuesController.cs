using RentApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RentApp.Controllers
{
    [Authorize(Roles = "Admin")]
    public class ValuesController : ApiController
    {
        ISmtpService smtp;

        public ValuesController(ISmtpService smtp)
        {
            this.smtp = smtp;
        }
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post(U u)
        {
            smtp.SendMail(u.subject, u.content, u.mailTo);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

        public class U
        {
            public string subject { get; set; }
            public string content { get; set; }
            public string mailTo { get; set; }
        }
    }
}
