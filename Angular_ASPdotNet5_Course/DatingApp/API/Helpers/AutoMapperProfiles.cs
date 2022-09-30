using System.Linq;
using AngularASPdotNet5Course.DatingApp.API.DTOs;
using AngularASPdotNet5Course.DatingApp.API.Extensions;
using API.Entities;
using AutoMapper;

namespace AngularASPdotNet5Course.DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => 
                    src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
            CreateMap<MemberUpdateDto, AppUser>();

        }
    }
}