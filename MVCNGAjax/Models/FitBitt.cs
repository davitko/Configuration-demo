using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class FitBitt
    {
        public string Id { get; set; }
        public string date { get; set; }
        public string activity { get; set; }
        public string distance { get; set; }
        public string duration { get; set; }
        public string accelerometer { get; set; }
        public string altimeter { get; set; }
        public string heartRate { get; set; }
        public string energy { get; set; }
    }
}