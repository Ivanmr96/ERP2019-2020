using ProyectoERP_API_DAL.Connection;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_DAL.Handler
{
    public class clsOperacionesDeLineaDePedido_DAL
    {
        /// <summary>
        /// Método que obtiene una línea de pedido según el código de producto y código de Pedido
        /// </summary>
        /// <param name="codigoProducto">Entero con código del producto cuya línea se consulta</param>
        /// <param name="codigoPedido">Entero con código del pedido al que pertenece la línea a consultar</param>
        /// <returns>clsLineaPedido lineaPedido</returns>
        public clsLineaPedido GetLineaPedidoPorIdProductoIdPedido(int codigoProducto, int codigoPedido)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            SqlDataReader reader = null;
            clsLineaPedido lineaPedido = new clsLineaPedido();

            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.Parameters.Add("@codigoProducto", System.Data.SqlDbType.Int).Value = codigoProducto;
                command.Parameters.Add("@codigoPedido", System.Data.SqlDbType.Int).Value = codigoPedido;
                command.CommandText = "SELECT * FROM ERP_LineaPedidos WHERE CodigoProducto = @codigoProducto AND  CodigoPedido = @codigoPedido";

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        lineaPedido.CodigoProducto = (int)reader["CodigoProducto"];
                        lineaPedido.CodigoPedido = (int)reader["CodigoPedido"];
                        lineaPedido.Cantidad = (int)reader["Cantidad"];
                        lineaPedido.PrecioUnitario = (int)reader["PrecioUnitario"];
                        lineaPedido.PrecioUnitario = (double)reader["PrecioUnitario"];
                        lineaPedido.Divisa = (string)reader["Divisa"];
                    }
                }
            }
            catch(Exception e)
            {
                throw e;
            }
            finally
            {
                if (reader != null)
                {
                    reader.Close();
                }
                if (connection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return lineaPedido;
        }



        /// <summary>
        /// Método que actualiza un línea de pedido según el código de producto y el código de pedido
        /// </summary>
        /// <param name="lineaPedidoAModificar">Objeto clsLineaPedido que se va a modificar</param>
        /// <returns>int filasAfectadas</returns>
        public int ActualizarLineaPedidoPorIdProductoIdPedido(clsLineaPedido lineaPedidoAModificar)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            int filasAfectadas = 0;

            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;
                command.Parameters.Add("@codigoProducto", System.Data.SqlDbType.Int).Value = lineaPedidoAModificar.CodigoProducto;
                command.Parameters.Add("@codigoPedido", System.Data.SqlDbType.Int).Value = lineaPedidoAModificar.CodigoPedido;
                command.Parameters.Add("@cantidad", System.Data.SqlDbType.TinyInt).Value = lineaPedidoAModificar.Cantidad;
                command.Parameters.Add("@precioUnitario", System.Data.SqlDbType.Money).Value = lineaPedidoAModificar.PrecioUnitario;
                command.Parameters.Add("@divisa", System.Data.SqlDbType.VarChar).Value = lineaPedidoAModificar.Divisa;

                command.CommandText = "UPDATE ERP_LineaPedidos SET " +
                                        "CodigoPedido = @codigoPedido, " +
                                        "Cantidad = @cantidad, " +
                                        "PrecioUnitario = @precioUnitario, " +
                                        "Divisa = " +
                                        "WHERE CodigoProducto = @codigoProducto AND CodigoPedido = @codigoPedido";

                filasAfectadas = command.ExecuteNonQuery();
            }
            catch(Exception e)
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

        /// <summary>
        /// Método que inserta líneas de pedido según el código de un nuevo pedido
        /// </summary>
        /// <param name="codigoNuevoPedido">int que indica el código del nuevo pedido</param>
        /// <param name="nuevasLineasPedido">Listado List<clsLineaPedido> con las lineas de pedido a insertar</param>
        /// <returns>int totalFilasAfectadas</returns>
        public int InsertarLineasPedidoSegunCodigoDePedido(int codigoNuevoPedido, List<clsLineaPedido> nuevasLineasPedido)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            int filasAfectadasPorInsercion = 0;
            int totalFilasAfectadas = 0;

            //Asigno el codigo del pedido a las líneas del pedido
            foreach (clsLineaPedido linea in nuevasLineasPedido)
            {
                linea.CodigoPedido = codigoNuevoPedido;
            }

            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                foreach (clsLineaPedido linea in nuevasLineasPedido)
                {
                    command.Parameters.Add("@codigoProducto", System.Data.SqlDbType.Int).Value = linea.CodigoProducto;
                    command.Parameters.Add("@codigoProducto", System.Data.SqlDbType.Int).Value = linea.CodigoPedido;
                    command.Parameters.Add("@cantidad", System.Data.SqlDbType.TinyInt).Value = linea.Cantidad;
                    command.Parameters.Add("@precioUnitario", System.Data.SqlDbType.Money).Value = linea.PrecioUnitario;
                    command.Parameters.Add("@divisa", System.Data.SqlDbType.Money).Value = linea.Divisa;

                    command.CommandText = "INSERT INTO ERP_LineaPedidos(CodigoProducto, CodigoPedido, Cantidad, PrecioUnitario, Divisa) " +
                                            "VALUES(@codigoProducto, @codigoProducto, @cantidad, @precioUnitario, @divisa)";

                    filasAfectadasPorInsercion = command.ExecuteNonQuery();

                    //Si filasAfectadasPorInsercion es 1, la inserción será exitosa
                    if (filasAfectadasPorInsercion == 1)
                    {
                        //Para comprobar más tarde si totalFilasAfectadas es igual a la cantidad de líneas del listado, entonces la inserción del pedido será exitosa
                        totalFilasAfectadas++;
                    }
                }

            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                if(connection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return totalFilasAfectadas;
        }

    }
}
