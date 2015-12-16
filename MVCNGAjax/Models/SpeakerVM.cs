using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class SpeakerVM
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Expertise { get; set; }

        public int TalksDelivered { get; set; }
    }
}