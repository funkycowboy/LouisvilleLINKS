using System.Web.Http;
using System.Net.Http.Headers;

class WebApiConfig
{
    public static void Register(HttpConfiguration configuration)
    {

        configuration.MapHttpAttributeRoutes(); 
        
        configuration.Routes.MapHttpRoute("API Default", "api/{controller}/{id}",
            new { id = RouteParameter.Optional });

        //To produce JSON format add this line of code
        configuration.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
    }
}