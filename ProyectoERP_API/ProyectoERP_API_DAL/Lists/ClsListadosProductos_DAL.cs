using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProyectoERP_API_DAL.Connection;

namespace ProyectoERP_API_DAL.Lists
{
    public class ClsListadosProductos_DAL
    {
        /// <summary>
        /// Nombre: getProductList
        /// Comentario: Este método nos permite obtener un listado de los productos almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getProductList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public List<clsProducto> getProductList()
        {
            List<clsProducto> listadoProductos = new List<clsProducto>();
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProducto producto;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.CommandText = "SELECT * FROM ERP_Productos";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        producto = new clsProducto();//Yo crearía un constructor por defecto para ClsProducto
                        producto.Codigo = ((int)miLector["Codigo"]);
                        producto.Nombre = (string)miLector["Nombre"];
                        producto.Descripcion = (miLector["Descripcion"] is DBNull) ? "DEFAULT" : (string)miLector["Descripcion"];
                        producto.Stock = (int)miLector["Stock"];

                        listadoProductos.Add(producto);
                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podriamos pasar la excepción para que en caso de error el front muestre una alerta de error
            }
            finally
            {
                if (miLector != null)
                {
                    miLector.Close();
                }
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return listadoProductos;
        }
    }
}
