using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCNGAjax.Controllers
{
    public class TroubleshootController : Controller
    {
        // GET: Troubleshoot
        public ActionResult environmentalTroubleshoot()
        {
            return View();
        }
    }
}