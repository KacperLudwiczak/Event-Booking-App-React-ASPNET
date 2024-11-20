using Application.Activities;
using Application.Comments;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            string currentUsername = null;
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(destination => destination.HostUsername, options => options.MapFrom(source => source.Attendees
                    .FirstOrDefault(item => item.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, AttendeeDto>()
                .ForMember(destination => destination.DisplayName, options => options.MapFrom(source => source.AppUser.DisplayName))
                .ForMember(destination => destination.Username, options => options.MapFrom(source => source.AppUser.UserName))
                .ForMember(destination => destination.Bio, options => options.MapFrom(source => source.AppUser.Bio))
                .ForMember(destination => destination.Image, options => options.MapFrom(source => source.AppUser.Photos.FirstOrDefault(item => item.IsMain).Url))
                .ForMember(destination => destination.FollowersCount, options => options.MapFrom(source => source.AppUser.Followers.Count))
                .ForMember(destination => destination.FollowingCount, options => options.MapFrom(source => source.AppUser.Followings.Count))
                .ForMember(destination => destination.Following,
                    options => options.MapFrom(source => source.AppUser.Followers.Any(item => item.Observer.UserName == currentUsername)));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(destination => destination.Image, source => source.MapFrom(options => options.Photos.FirstOrDefault(item => item.IsMain).Url))
                .ForMember(destination => destination.FollowersCount, options => options.MapFrom(source => source.Followers.Count))
                .ForMember(destination => destination.FollowingCount, options => options.MapFrom(source => source.Followings.Count))
                .ForMember(destination => destination.Following,
                    options => options.MapFrom(source => source.Followers.Any(item => item.Observer.UserName == currentUsername)));
            CreateMap<Comment, CommentDto>()
                .ForMember(destination => destination.Username, options => options.MapFrom(source => source.Author.UserName))
                .ForMember(destination => destination.DisplayName, options => options.MapFrom(source => source.Author.DisplayName))
                .ForMember(destination => destination.Image, options => options.MapFrom(source => source.Author.Photos.FirstOrDefault(item => item.IsMain).Url));
        }
    }
}