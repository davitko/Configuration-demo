using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCNGAjax.Models
{
    public class FitBittRepository
    {
        static FitBitt[] healtCareData = new[]
            {
                new FitBitt { Id= "0001", date= "12-7-2015 22:52:45", activity= "running", distance= "16", duration= "3", accelerometer="20", altimeter="200", heartRate="80", energy="75"  },
                new FitBitt { Id= "0002", date= "12-8-2015 23:52:45", activity= "walking", distance= "20", duration= "2", accelerometer="55", altimeter="1120", heartRate="70", energy="255"},
                new FitBitt { Id= "0003", date= "12-9-2015 21:52:45 ", activity= "climbing", distance= "5", duration= "15", accelerometer="75", altimeter="4000", heartRate="85", energy="915" },
                new FitBitt { Id= "0004", date= "12-10-2015 20:52:45", activity= "cycling", distance= "35", duration= "18", accelerometer="95", altimeter="3000", heartRate="90", energy="685" }
            };

        public FitBitt[] GetHealtCareData()
        {
            return healtCareData;
        }

    }
}