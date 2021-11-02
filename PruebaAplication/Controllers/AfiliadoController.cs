using Newtonsoft.Json;
using PruebaAplication.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Xml.Serialization;

namespace PruebaAplication.Controllers
{
    public class AfiliadoController : Controller
    {
        [HttpGet]
        public  ActionResult buscar()
        {
            return View();
        }

       [HttpGet]
       public ActionResult Agregar()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            ViewBag.id = id;
            return View();
        }


        [HttpGet]
        public ActionResult ConsultaMasiva()
        {
            return View();
        }



    }
}