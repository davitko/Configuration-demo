using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVCNGAjax
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Configuration", action = "index", id = UrlParameter.Optional }
            );

            // routes.MapRoute(
            //     name: "LogIn",
            //     url: "{controller}/{action}/{id}",
            //     defaults: new { controller = "LogIn", action = "login", id = UrlParameter.Optional }
            // );

            // routes.MapRoute(
            //     name: "Events",
            //     url: "{controller}/{action}/{id}",
            //     defaults: new { controller = "Events", action = "events", id = UrlParameter.Optional }
            // );

            // routes.MapRoute(
            //    name: "Registration",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Registration", action = "registration", id = UrlParameter.Optional }
            //);
        }
    }
}
