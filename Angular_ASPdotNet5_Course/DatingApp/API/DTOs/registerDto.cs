using System.ComponentModel.DataAnnotations;

namespace AngularASPdotNet5Course.DatingApp.API.DTOs
{
    public class registerDto
    {
        [Required]
        public string Username {get; set;}

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password {get; set;}
    }
}