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
        }
    }
}