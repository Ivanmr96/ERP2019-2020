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
                    miLector.Read();
                    lineaDePedido = new clsLineaPedido();
                    //lineaDePedido.CodigoProducto = codigoProducto;
                    lineaDePedido.CodigoProducto = (int)miLector["CodigoProducto"];
                    lineaDePedido.CodigoPedido = codigoPedido;
                    //lineaDePedido.CodigoPedido = (int)miLector["CodigoPedido"];
                    
                    lineaDePedido.PrecioUnitario = (miLector["PrecioUnitario"] is DBNull) ? 0.0 : Convert.ToDouble(miLector["PrecioUnitario"]);
                    lineaDePedido.Cantidad = Convert.ToInt32(miLector["Cantidad"]);
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
        /// <param name="codigoProducto">Codigo del producto</param>
        /// <param name="codigoPedido">Codigo del pedido</param>
        /// <returns>Numero de filas afectadas</returns>
        public int borrarLineaPedido(int codigoProducto, int codigoPedido) {
            int filas = 0;
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
                filas = cmd.ExecuteNonQuery();
            } catch (Exception e) {
                throw e;
            }
            return filas;
        }

        /// <summary>
        /// Inserta una linea de pedido en un pedido concreto.
        /// </summary>
        /// <param name="lineaPedido">Linea de pedido a insertar</param>
        /// <returns>Numero de filas afectadas</returns>
        public int insertarLineaPedidoEnPedido(clsLineaPedido lineaPedido) {
            int filas = 0;
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
                 filas = cmd.ExecuteNonQuery();
            } catch (Exception e) {
                throw e;
            }
            return filas;
        }

        /// <summary>
        /// esta funcion inserta el pedido y sus correspondientes lineas de pedido
        /// </summary>
        /// <param name="lineaPedido">List<clsLineaPedido> lineaPedido</param>
        /// <returns>0 si no se ha incertado y 1 si se ha incertado correctamente</returns>
        public int insertarPedidoCompleto(List<clsLineaPedido> lineaPedido, string CifProveedor)
        {
            int resultado = 0;
            int codigoPedido = 0;

            try
            {
                ClsHandlerPedidos_DAL hp=new ClsHandlerPedidos_DAL();
                codigoPedido = hp.InsertarNuevoPedido(CifProveedor);

                for (int i = 0; i < lineaPedido.Count; i++)
                {
                    lineaPedido[i].CodigoPedido = codigoPedido;
                }

                for (int i = 0; i < lineaPedido.Count; i++)
                {
                    if (lineaPedido[i].CodigoPedido == codigoPedido)
                    {

                        insertarLineaPedidoEnPedido(lineaPedido[i]);
                        resultado = 1;
                    }
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            return resultado;
        }

        //Método Diana

        /// <summary>
        /// Método que actualiza la cantidad de la línea de pedido llamando a procedimiento actualizarCantidadLineaPedido en BD
        /// </summary>
        /// <param name="codigoProducto">int con código del producto a cuya línea se va a modificar</param>
        /// <param name="codigoPedido">int con código del pedido cuya línea se va a modificar</param>
        /// <param name="nuevaCantidad">int con nueva cantidad a modificar en linea de pedido</param>
        /// <returns>int filasAfectadas</returns>
        public int ActualizarLineaPedidoPorIdProductoIdPedido(int codigoProducto, int codigoPedido, int nuevaCantidad)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();

            int filasAfectadas = 0;
            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.CommandText = "actualizarCantidadLineaPedido";
                command.CommandType = CommandType.StoredProcedure;

                //Añade los parámetros del procedimiento               
                command.Parameters.Add("@codigoProducto", SqlDbType.Int).Value = codigoProducto;
                command.Parameters.Add("@codigoPedido", SqlDbType.Int).Value = codigoPedido;
                command.Parameters.Add("@nuevaCantidad", SqlDbType.TinyInt).Value = nuevaCantidad;

                filasAfectadas = command.ExecuteNonQuery();

            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                if (connection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return filasAfectadas;
        }


    }
}
