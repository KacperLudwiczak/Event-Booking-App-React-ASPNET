using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(destination => destination.HostUsername, options => options.MapFrom(source => source.Attendees
                    .FirstOrDefault(item => item.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, Profiles.Profile>()
                .ForMember(destination => destination.DisplayName, options => options.MapFrom(source => source.AppUser.DisplayName))
                .ForMember(destination => destination.Username, options => options.MapFrom(source => source.AppUser.UserName))
                .ForMember(destination => destination.Bio, options => options.MapFrom(source => source.AppUser.Bio));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(destination => destination.Image, source => source.MapFrom(options => options.Photos.FirstOrDefault(item => item.IsMain).Url));
        }
    }
}