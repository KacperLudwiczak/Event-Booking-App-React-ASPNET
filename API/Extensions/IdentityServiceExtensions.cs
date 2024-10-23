using System.Text;
using Domain;
using Persistence;
namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, 
            IConfiguration config)
        {
            services.AddIdentityCore<AppUser>(option =>
            {
                option.Password.RequireNonAlphanumeric = false;
                option.User.RequireUniqueEmail = true;
            })
            .AddEntityFrameworkStores<DataContext>();
            services.AddAuthentication();
            return services;
        }
    }
}