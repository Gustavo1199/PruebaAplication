using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PruebaAplication.Models
{
    public class Afiliado
    {
        public int ID { get; set; }
        public int ID_ESTATUS { get; set; }
        public int ID_PLAN { get; set; }
        public string NOMBRE { get; set; }
        public string APELLIDO { get; set; }
        public string SEXO { get; set; }
        public string CEDULA { get; set; }
        public string NUMERO_SEGURIDAD_SOCIAL { get; set; }
        public DateTime FECHA_NACIMIENTO { get; set; }
        public DateTime FECHA_REGISTRO { get; set; }
        public double MONTO_CONSUMIDO { get; set; }
        public double MONTO_COBERTURA { get; set; }
        public double MONTO_RESTANTE { get; set; }
        public string NOMBRE_PLAN { get; set; }

       


    }
}