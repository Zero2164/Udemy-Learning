using API.Entities;

namespace AngularASPdotNet5Course.DatingApp.API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}