using MVCNGAjax.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;

namespace MVCNGAjax.Controllers
{
    public class WelcomeController : Controller
    {

        // GET: Events
        public ActionResult Welcome()
        {
            return View();
        }

    }
}
