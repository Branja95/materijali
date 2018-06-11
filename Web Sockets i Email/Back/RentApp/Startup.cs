using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using RentApp.App_Start;

[assembly: OwinStartup(typeof(RentApp.Startup))]

namespace RentApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);//Nije ista verzija kao u prethodnom resenju, 4.nesto je tu, a tamo 3.nesto
            app.MapSignalR();
        }
    }
}
