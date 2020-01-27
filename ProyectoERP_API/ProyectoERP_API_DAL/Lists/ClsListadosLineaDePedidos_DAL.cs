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
    public class ClsListadosLineaDePedidos_DAL
    {
        /// <summary>
        /// Nombre: getOrderLineList
        /// Comentario: Este método nos permite obtener un listado de las líneas de pedido de un producto y pedido determinado.
        /// Cabecera: public List<clsLineaPedido> getOrderLineList(int codigoProducto, int codigoPedido)
        /// </summary>
        /// <returns>Devuelve un list del tipo clsLineaPedido</returns>
        public List<clsLineaPedido> getOrderLineList(int codigoProducto, int codigoPedido)
        {
            List<clsLineaPedido> listadoLineaPedidos = new List<clsLineaPedido>();
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsLineaPedido lineaPedido;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.CommandText = "SELECT * FROM ERP_LineaPedidos WHERE CodigoProducto = @CodigoProducto AND CodigoPedido = @CodigoPedido";
                sqlCommand.Parameters.Add("@CodigoProducto", System.Data.SqlDbType.Int).Value = codigoProducto;
                sqlCommand.Parameters.Add("@CodigoPedido", System.Data.SqlDbType.Int).Value = codigoPedido;

                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        lineaPedido = new clsLineaPedido();//Yo crearía un constructor por defecto para clsLineaPedido
                        lineaPedido.CodigoProducto = (int)miLector["CodigoProducto"];
                        lineaPedido.CodigoPedido = (int)miLector["CodigoPedido"];
                        lineaPedido.Cantidad = (int)miLector["Cantidad"];
                        lineaPedido.PrecioUnitario = (miLector["PrecioUnitario"] is DBNull) ? 0.0 : (double)miLector["PrecioUnitario"];

                        listadoLineaPedidos.Add(lineaPedido);
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

            return listadoLineaPedidos;
        }
    }
}
