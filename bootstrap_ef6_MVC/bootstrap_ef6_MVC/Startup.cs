using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(bootstrap_ef6_MVC.Startup))]
namespace bootstrap_ef6_MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
