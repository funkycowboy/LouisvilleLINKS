using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;
using LINKS.Data;
using LINKS.Repository;
using LINKS.Repository.Interfaces;

namespace LINKS
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();

            container.RegisterType<IMembersRepository, MembersRepository>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}