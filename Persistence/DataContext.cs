using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<UserFollowing> UserFollowings { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<ActivityAttendee>(item => item.HasKey(activityAttendee => new { activityAttendee.AppUserId, activityAttendee.ActivityId }));
            builder.Entity<ActivityAttendee>()
                .HasOne(user => user.AppUser)
                .WithMany(user => user.Activities)
                .HasForeignKey(activityAttendee => activityAttendee.AppUserId);
            builder.Entity<ActivityAttendee>()
                .HasOne(user => user.Activity)
                .WithMany(user => user.Attendees)
                .HasForeignKey(activityAttendee => activityAttendee.ActivityId);
            builder.Entity<Comment>()
                .HasOne(activity => activity.Activity)
                .WithMany(comment => comment.Comments)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<UserFollowing>(build =>
            {
                build.HasKey(key => new { key.ObserverId, key.TargetId });
                build.HasOne(observer => observer.Observer)
                    .WithMany(follow => follow.Followings)
                    .HasForeignKey(observer => observer.ObserverId)
                    .OnDelete(DeleteBehavior.Cascade);
                build.HasOne(target => target.Target)
                    .WithMany(follow => follow.Followers)
                    .HasForeignKey(target => target.TargetId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}