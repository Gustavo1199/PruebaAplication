using PruebaAplication.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace PruebaAplication.Areas.HelpPage.Controllers
{
    [RoutePrefix("api/afiliado")]
    public class AfiliadoController : ApiController
    {

        string conex = ConfigurationManager.ConnectionStrings["Conexion"].ConnectionString;

        [HttpGet]
        [Route("BUSCARTODOS")]
        public List<Afiliado> buscarTodos()
        {
            List<Afiliado> ListAfiliado = new List<Afiliado>();
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();

                    SqlCommand cmd = new SqlCommand("P_BUSCAR_ALL_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader redear = cmd.ExecuteReader();
                    while (redear.Read())
                    {
                        Afiliado afi = new Afiliado();
                        afi.NOMBRE = redear["NOMBRE"].ToString();
                        afi.APELLIDO = redear["APELLIDO"].ToString();
                        afi.CEDULA = redear["CEDULA"].ToString();
                        afi.FECHA_NACIMIENTO = Convert.ToDateTime(redear["FECHA_NACIMIENTO"].ToString());
                        afi.FECHA_REGISTRO = Convert.ToDateTime(redear["FECHA_REGISTRO"].ToString());
                        afi.ID = Convert.ToInt32(redear["ID"]);
                        afi.ID_ESTATUS = Convert.ToInt32(redear["ID_ESTATUS"]);
                        afi.ID_PLAN = Convert.ToInt32(redear["ID_PLAN"]);
                        afi.MONTO_CONSUMIDO = Convert.ToDouble(redear["MONTO_CONSUMIDO"]);
                        afi.SEXO = redear["SEXO"].ToString();
                        afi.CEDULA = redear["CEDULA"].ToString();
                        afi.NUMERO_SEGURIDAD_SOCIAL = redear["NUMERO_SEGURIDAD_SOCIAL"].ToString();
                        afi.NOMBRE = redear["NOMBRE"].ToString();
                        ListAfiliado.Add(afi);
                    }
                    cx.Close();
                }

                return ListAfiliado;
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
        }

        [HttpPost]
        [Route("Agregar")]
        public bool Agregar(Afiliado afiliado)
         {
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();
                    SqlCommand cmd = new SqlCommand("P_INSERT_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@NOMBRE", SqlDbType.VarChar).Value = afiliado.NOMBRE;
                    cmd.Parameters.Add("@APELLIDO", SqlDbType.VarChar).Value = afiliado.APELLIDO;
                    cmd.Parameters.Add("@FECHA_NACIMIENTO", SqlDbType.DateTime).Value = afiliado.FECHA_NACIMIENTO;
                    cmd.Parameters.Add("@SEXO", SqlDbType.VarChar).Value = afiliado.SEXO;
                    cmd.Parameters.Add("@CEDULA", SqlDbType.VarChar).Value = afiliado.CEDULA;
                    cmd.Parameters.Add("@NUMERO_SEGURIDAD_SOCIAL", SqlDbType.VarChar).Value = afiliado.NUMERO_SEGURIDAD_SOCIAL;
                    cmd.Parameters.Add("@FECHA_REGISTRO", SqlDbType.DateTime).Value = DateTime.Now;
                    cmd.Parameters.Add("@MONTO_CONSUMIDO", SqlDbType.Decimal).Value = afiliado.MONTO_CONSUMIDO;
                    cmd.Parameters.Add("@ID_ESTATUS", SqlDbType.Int).Value = afiliado.ID_ESTATUS;
                    cmd.Parameters.Add("@ID_PLAN", SqlDbType.Int).Value = afiliado.ID_PLAN;
                    cmd.ExecuteNonQuery();
                    cx.Close();

                }

                return true;
            }
            catch (Exception x)
            {

                throw x;
            }
           
        }


        [HttpPost]
        [Route("Editar")]
        public bool Editar(Afiliado afiliado)
        {
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();
                    SqlCommand cmd = new SqlCommand("P_ACTUALIZAR_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@NOMBRE", SqlDbType.VarChar).Value = afiliado.NOMBRE;
                    cmd.Parameters.Add("@ID", SqlDbType.Int).Value = afiliado.ID;
                    cmd.Parameters.Add("@APELLIDO", SqlDbType.VarChar).Value = afiliado.APELLIDO;
                    cmd.Parameters.Add("@FECHA_NACIMIENTO", SqlDbType.DateTime).Value = afiliado.FECHA_NACIMIENTO;
                    cmd.Parameters.Add("@SEXO", SqlDbType.VarChar).Value = afiliado.SEXO;
                    cmd.Parameters.Add("@CEDULA", SqlDbType.VarChar).Value = afiliado.CEDULA;
                    cmd.Parameters.Add("@NUMERO_SEGURIDAD_SOCIAL", SqlDbType.VarChar).Value = afiliado.NUMERO_SEGURIDAD_SOCIAL;
                    cmd.Parameters.Add("@FECHA_REGISTRO", SqlDbType.DateTime).Value = DateTime.Now;
                    cmd.Parameters.Add("@MONTO_CONSUMIDO", SqlDbType.Decimal).Value = afiliado.MONTO_CONSUMIDO;
                    cmd.Parameters.Add("@ID_ESTATUS", SqlDbType.Int).Value = afiliado.ID_ESTATUS;
                    cmd.Parameters.Add("@ID_PLAN", SqlDbType.Int).Value = afiliado.ID_PLAN;
                    cmd.ExecuteNonQuery();
                    cx.Close();

                }

                return true;
            }
            catch (Exception x)
            {

                throw x;
            }

        }


        [HttpPost]
        [Route("Inactivar/{id}")]
        public bool Inactivar([FromUri] int id)
        {
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();
                    SqlCommand cmd = new SqlCommand("P_INACTIVAR_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@ID", SqlDbType.Int).Value = id;
                    cmd.ExecuteNonQuery();
                    cx.Close();
                }

                return true;
            }
            catch (Exception x)
            {

                throw x;
            }

        }

        [HttpPost]
        [Route("RestarMonto/{id}/{monto}")]
        public bool RestarMonto([FromUri] int id, [FromUri] decimal monto)
        {
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();
                    SqlCommand cmd = new SqlCommand("P_RESTAR_MONTO_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@ID", SqlDbType.Int).Value = id;
                    cmd.Parameters.Add("@MONTO_CONSUMIDO", SqlDbType.Decimal).Value = monto;
                    cmd.ExecuteNonQuery();
                    cx.Close();
                }

                return true;
            }
            catch (Exception x)
            {

                throw x;
            }

        }


        [HttpGet]
        [Route("ConsultaMasiva/{nombre}/{apellido}/{cedula}")]
        public List<Afiliado> ConsultaMasiva([FromUri] string  nombre = null, [FromUri] string apellido = null, [FromUri] string cedula = null)
        {
            List<Afiliado> ListAfiliado = new List<Afiliado>();
            try
            {
                using (SqlConnection cx = new SqlConnection(conex))
                {
                    cx.Open();

                    SqlCommand cmd = new SqlCommand("P_BUSCAR_AFILIADO", cx);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@NOMBRE", SqlDbType.VarChar).Value = nombre;
                    cmd.Parameters.Add("@APELLIDO", SqlDbType.VarChar).Value = apellido;
                    cmd.Parameters.Add("@CEDULA", SqlDbType.VarChar).Value = cedula;
                    SqlDataReader redear = cmd.ExecuteReader();
                    while (redear.Read())
                    {
                        Afiliado afi = new Afiliado();
                        afi.NOMBRE = redear["NOMBRE"].ToString();
                        afi.APELLIDO = redear["APELLIDO"].ToString();
                        afi.CEDULA = redear["CEDULA"].ToString();
                        afi.FECHA_NACIMIENTO = Convert.ToDateTime(redear["FECHA_NACIMIENTO"].ToString());
                        afi.FECHA_REGISTRO = Convert.ToDateTime(redear["FECHA_REGISTRO"].ToString());
                        afi.ID = Convert.ToInt32(redear["ID"]);
                        afi.ID_ESTATUS = Convert.ToInt32(redear["ID_ESTATUS"]);
                       // afi.ID_PLAN = Convert.ToInt32(redear["ID_PLAN"]);
                        afi.MONTO_CONSUMIDO = Convert.ToDouble(redear["MONTO_CONSUMIDO"]);
                        afi.MONTO_COBERTURA = Convert.ToDouble(redear["MONTO_COBERTURA"]);
                        afi.MONTO_RESTANTE = Convert.ToDouble(redear["MONTO_RESTANTE"]);
                        afi.SEXO = redear["SEXO"].ToString();
                        afi.CEDULA = redear["CEDULA"].ToString();
                        afi.NUMERO_SEGURIDAD_SOCIAL = redear["NUMERO_SEGURIDAD_SOCIAL"].ToString();
                        afi.NOMBRE_PLAN = redear["PLANS"].ToString();
                      
                        ListAfiliado.Add(afi);
                    }
                    cx.Close();
                }

                return ListAfiliado;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }





    }
}