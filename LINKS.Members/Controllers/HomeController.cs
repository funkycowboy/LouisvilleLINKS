using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace LINKS.Members.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }

}
