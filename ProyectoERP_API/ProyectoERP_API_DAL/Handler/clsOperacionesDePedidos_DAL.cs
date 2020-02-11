using ProyectoERP_API_DAL.Connection;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_DAL.Handler
{
    public class clsOperacionesDePedidos_DAL
    {
        /// <summary>
        /// Método que obtiene un pedido determinado según su código
        /// </summary>
        /// <param name="codigoPedido">entero con código del pedido a obtener</param>
        /// <returns>clsPedido pedidoNuevo</returns>
        public clsPedido GetPedidoPorId(int codigoPedido)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            SqlDataReader reader = null;
            clsPedido pedido = new clsPedido();
            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.Parameters.Add("@codigo", System.Data.SqlDbType.Int).Value = codigoPedido;

                command.CommandText = "SELECT* FROM ERP_Pedidos WHERE Codigo = @codigo";

                reader = command.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        pedido.Codigo = (int)reader["Codigo"];
                        pedido.Estado = (string)reader["Estado"];
                        pedido.FechaPedido = (DateTime)reader["FechaPedido"];
                        pedido.FechaRecepcion = (DateTime)reader["FechaRecepcion"];
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

            return pedido;
        }


        /// <summary>
        /// Método que actualiza un pedido determinado según su Id
        /// </summary>
        /// <param name="pedidoParaModificar">Objeto clsPedido que se va a modificar</param>
        /// <returns>int filasAfectadas</returns>
        public int ActualizarPedidoPorId(clsPedido pedidoParaModificar)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            int filasAfectadas = 0; 

            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.Parameters.Add("@codigo", System.Data.SqlDbType.Int).Value = pedidoParaModificar.Codigo;
                command.Parameters.Add("@estado", System.Data.SqlDbType.VarChar).Value = pedidoParaModificar.Estado;
                command.Parameters.Add("@fechaPedido", System.Data.SqlDbType.DateTime).Value = pedidoParaModificar.FechaPedido;
                command.Parameters.Add("@fechaRecepcion", System.Data.SqlDbType.DateTime).Value = pedidoParaModificar.FechaRecepcion;

                command.CommandText = "UPDATE ERP_Pedidos SET Estado = @estado, FechaPedido = @fechaPedido, FechaRecepcion= @fechaRecepcion WHERE Codigo = @codigo";

                filasAfectadas = command.ExecuteNonQuery();


            }catch(Exception e)
            {
                throw e;
            }
            finally
            {
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return filasAfectadas;

        }

        /// <summary>
        /// Método que crea un nuevo pedido llamando a procedimiento en BBDD y devuelve el código del pedido insertado
        /// </summary>
        /// <returns>int codigoNuevoPedido</returns>
        public int InsertarNuevoPedidoDevolviendoSuCodigo() //No recibe parámetros, porque en BBDD crea uno con los mismos datos de base 
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();
            int codigoNuevoPedido = 0;

            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;
                //Se le pasa el nombre del procedimiento a ejecutar
                command.CommandText = "crearPedido";
                //Para que llame al procedimiento almacenado
                command.CommandType = CommandType.StoredProcedure;

                //Devuelve la primera columna de la primera fila insertada, en nuestro caso el código del pedido
                codigoNuevoPedido = Convert.ToInt32(command.ExecuteScalar());

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

            return codigoNuevoPedido;
        }

        /// <summary>
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido que queremos cancelar.</param>
        public void cancelarPedido(int codigoPedido) {

            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            try {
                connection = clsMyConnection.getConnection();
                SqlCommand cmd = new SqlCommand(
                "cancelarPedido", connection);

                // Decimos que se trata de un procedure
                cmd.CommandType = CommandType.StoredProcedure;

                // Añadimos los parametros al procedure
                cmd.Parameters.Add(new SqlParameter("@CodigoPedido", codigoPedido));
                //Ejecutamos el procedimiento.
                cmd.ExecuteNonQuery();
            } catch (Exception e) {
                throw e;
            }

        }
    }
}
