using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LINKS.Members.Models
{
    // Models returned by MeController actions.
    public class GetViewModel
    {
        public string Hometown { get; set; }
    }
}