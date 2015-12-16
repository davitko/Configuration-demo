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
    public class EventsController : Controller
    {
        EventsRepository eventsRepository = new EventsRepository();
        // GET: Events
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetTalkDetails()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(eventsRepository.GetTalks(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }

        [HttpPost]
        public ActionResult AddTalk(TalkVM talk)
        {
            eventsRepository.AddTalk(talk);
            return new HttpStatusCodeResult(HttpStatusCode.OK, "Item added");
        }
        public ActionResult GetSpeakerDetails()
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(eventsRepository.GetSpeakers(), settings),
                ContentType = "application/json"
            };

            return jsonResult;
        }

    }
}