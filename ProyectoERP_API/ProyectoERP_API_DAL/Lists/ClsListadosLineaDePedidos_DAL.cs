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



        public List<clsLineaPedido> getLineasPedidoDeUnPedido(int codigoPedido)
        {
            clsMyConnection miConexion = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            SqlDataReader dataReader = null;
            List<clsLineaPedido> listadoLineasPedido = new List<clsLineaPedido>();
            clsLineaPedido lineaPedido;


            try
            {
                command.Parameters.AddWithValue("@codigoPedido", codigoPedido);
                command.CommandText = "SELECT * FROM ERP_LineaPedidos WHERE CodigoPedido = @codigoPedido ";
                command.Connection = connection;
                dataReader = command.ExecuteReader();

                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        lineaPedido = new clsLineaPedido();

                        lineaPedido.CodigoPedido = (int)dataReader["CodigoPedido"];
                        lineaPedido.CodigoProducto = (int)dataReader["CodigoProducto"];

                        if (!dataReader.IsDBNull(dataReader.GetOrdinal("Cantidad")))
                        {
                            lineaPedido.Cantidad = (int)dataReader["Cantidad"];
                        }

                        if (!dataReader.IsDBNull(dataReader.GetOrdinal("PrecioUnitario")))
                        {
                            lineaPedido.PrecioUnitario = (double)dataReader["PrecioUnitario"];
                        }

                        listadoLineasPedido.Add(lineaPedido);
                    }
                }


            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                if (dataReader != null)
                {
                    dataReader.Close();
                }
                if (connection != null)
                {
                    miConexion.closeConnection(ref connection);
                }
            }
            return listadoLineasPedido;
        }

    }
}
