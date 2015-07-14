using System.Web.Mvc;

namespace TypeTowel.Controllers
{
    public class HotTowelController : Controller
    {
        //
        // GET: /HotTowel/
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

    }
}
