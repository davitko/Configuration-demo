using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCNGAjax.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVCNGAjax.Controllers
{
    public class HealtCareController : Controller
    {
        private FitBittRepository fitBittRepository = new FitBittRepository();
        // GET: HealtCare
        public ActionResult healtCare()
        {
            return View();
        }
        public ActionResult healtCareDetails()
        {
            return View();
        }
        public ActionResult GetHealtCareData()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(fitBittRepository.GetHealtCareData(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }
    }
}