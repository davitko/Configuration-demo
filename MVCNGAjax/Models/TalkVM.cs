using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class TalkVM
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Speaker { get; set; }
        public string Venue { get; set; }
        public string Duration { get; set; }
    }
}