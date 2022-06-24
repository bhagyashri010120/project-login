using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceWebApi.Models
{
    public partial class TblLogin
    {
        internal int IsAdmin;

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? IdAdmin { get; set; }
    }
}
