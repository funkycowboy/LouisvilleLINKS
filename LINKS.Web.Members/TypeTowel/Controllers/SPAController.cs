using System.Web.Mvc;

namespace LINKS.Controllers
{
    public class SPAController : Controller
    {
        //
        // GET: /Home/
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

    }
}
