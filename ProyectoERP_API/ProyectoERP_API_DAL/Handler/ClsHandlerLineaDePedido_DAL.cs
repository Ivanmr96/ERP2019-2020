using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProyectoERP_API_DAL.Connection;
using System.Data;

namespace ProyectoERP_API_DAL.Handler
{
    public class ClsHandlerLineaDePedido_DAL
    {
        /// <summary>
        /// Nombre: getOrderLine
        /// Comentario: Este método nos permite obtener una línea de pedido de un producto y pedido determinado.
        /// Cabecera: public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido)
        /// </summary>
        /// <returns>Devuelve un tipo clsLineaPedido</returns>
        public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido)
        {
            clsLineaPedido lineaDePedido = null;
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
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
                    lineaDePedido = new clsLineaPedido();
                    lineaDePedido.CodigoProducto = (int)miLector["CodigoProducto"];
                    lineaDePedido.CodigoPedido = (int)miLector["CodigoPedido"];
                    lineaDePedido.Cantidad = (int)miLector["Cantidad"];
                    lineaDePedido.PrecioUnitario = (miLector["PrecioUnitario"] is DBNull) ? 0.0 : (double)miLector["PrecioUnitario"];
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

            return lineaDePedido;
        }


        /// <summary>
        /// Borra una linea de pedido de un pedido concreto.
        /// </summary>
        /// <param name="codigoProducto">Codigo del producto a eliminar</param>
        /// <param name="codigoPedido">Codigo del pedido.</param>
        public void borrarLineaPedido(int codigoProducto, int codigoPedido) {

            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            try {
                connection = clsMyConnection.getConnection();
                SqlCommand cmd = new SqlCommand(
                "borrarLineaPedido", connection);

                // Decimos que se trata de un procedure
                cmd.CommandType = CommandType.StoredProcedure;

                // Añadimos los parametros al procedure
                cmd.Parameters.Add(new SqlParameter("@codigoProducto", codigoProducto));
                cmd.Parameters.Add(new SqlParameter("@codigoPedido", codigoPedido));
                //Ejecutamos el procedimiento.
                cmd.ExecuteNonQuery();
            } catch (Exception e) {
                throw e;
            }

        }

        /// <summary>
        /// Inserta una linea de pedido en un pedido concreto.
        /// </summary>
        /// <param name="lineaPedido">Linea de pedido a insertar.</param>
        public void insertarLineaPedidoEnPedido(clsLineaPedido lineaPedido) {

            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            try {
                connection = clsMyConnection.getConnection();
                SqlCommand cmd = new SqlCommand(
                "crearLineaPedido", connection);

                // Decimos que se trata de un procedure
                cmd.CommandType = CommandType.StoredProcedure;

                // Añadimos los parametros al procedure
                cmd.Parameters.Add(new SqlParameter("@codigoProducto", lineaPedido.CodigoProducto));
                cmd.Parameters.Add(new SqlParameter("@codigoPedido", lineaPedido.CodigoPedido));
                cmd.Parameters.Add(new SqlParameter("@cantidad", lineaPedido.Cantidad));
                cmd.Parameters.Add(new SqlParameter("@precioUnitario", lineaPedido.PrecioUnitario));
                cmd.Parameters.Add(new SqlParameter("@Divisa", lineaPedido.Divisa));
                //Ejecutamos el procedimiento.
                cmd.ExecuteNonQuery();
            } catch (Exception e) {
                throw e;
            }

        }

    }
}
