using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using LINKS.Data;
using LINKS.Repository.Interfaces;

namespace LINKS.Controllers
{
    public class MembersController : ApiController
    {
        private IMembersRepository _membersRepository;
        public MembersController(IMembersRepository membersRepository)
        {
            _membersRepository = membersRepository;
        }

        // GET api/<controller>
        public ActionResult Get()
        {
            return new JsonResult { Data = _membersRepository.Get() };                      
        }

        // GET api/<controller>/5
        public UserProfileDetail Get(int id)
        {
            return _membersRepository.Get(id); 
        }

        // GET api/<controller>/username
        public string Get(string userName)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}