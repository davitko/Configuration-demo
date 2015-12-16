using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class WunderBar
    {
        public string Id { get; set; }
        public string date { get; set; }
        public string temperature { get; set; }
        public string pressure { get; set; }
        public string humidity { get; set; }
        public string voc { get; set; }
        public string light { get; set; }
        public string noise { get; set; }
        public string battery { get; set; }
        public string rssi { get; set; }
    }
}