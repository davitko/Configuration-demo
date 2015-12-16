using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MVCNGAjax.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVCNGAjax.Controllers
{
    public class EnvironmentalController : Controller
    {
        WunderBarRepository wunderBarRepository = new WunderBarRepository();
        // GET: Environmental
        public ActionResult environmental()
        {
            return View();
        }
        public ActionResult environmentalDetails()
        {
            return View();
        }
        public ActionResult GetEnvironmentalData()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(wunderBarRepository.GetEnvironmentalData(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }


    }
}