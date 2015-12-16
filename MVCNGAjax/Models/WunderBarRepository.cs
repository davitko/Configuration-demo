using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class WunderBarRepository
    {
        static WunderBar[] environmentalData = new[]
            {
                new WunderBar { Id= "0001", date= "12-7-2015 22:52:45", temperature= "21", pressure= "982", humidity= "45", voc="563", light="2", noise="80", battery="75", rssi="-56" },
                new WunderBar { Id= "0002", date= "12-8-2015 23:52:45", temperature= "36", pressure= "879", humidity= "50", voc="563", light="1", noise="70", battery="25", rssi="-53" },
                new WunderBar { Id= "0003", date= "12-9-2015 21:52:45 ", temperature= "-5", pressure= "920", humidity= "60", voc="563", light="4", noise="85", battery="15", rssi="-45" },
                new WunderBar { Id= "0004", date= "12-10-2015 20:52:45", temperature= "-15", pressure= "945", humidity= "45", voc="563", light="3", noise="90", battery="85", rssi="-50" }
            };

        public WunderBar[] GetEnvironmentalData()
        {
            return environmentalData;
        }


    }
}