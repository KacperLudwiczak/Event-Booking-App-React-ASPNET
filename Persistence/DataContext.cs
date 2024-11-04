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
        }
    }
}