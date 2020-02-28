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
    public class ClsHandlerPedidos_DAL
    {
        
        /// <summary>
        /// Método que crea un nuevo pedido llamando a procedimiento en BBDD y devuelve el código del pedido insertado
        /// </summary>
        /// <returns>int codigoNuevoPedido</returns>
        public int InsertarNuevoPedido(string CifProveedor) //No recibe parámetros, porque en BBDD crea uno con los mismos datos de base 
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command;
            //var codigoNuevoPedido = 0;
            Int32 result = 0;
            try
            {
                connection = clsMyConnection.getConnection();
                //command.Connection = connection;
                //Se le pasa el nombre del procedimiento a ejecutar
                //command.CommandText = "crearPedido";
                //Para que llame al procedimiento almacenado
                //command.CommandType = CommandType.StoredProcedure;

                command = new SqlCommand("crearPedido", connection);
                command.CommandType = CommandType.StoredProcedure;

                var returnParameter = command.Parameters.Add("@ReturnVal", SqlDbType.Int);

                command.Parameters.Add("CifProveedor", SqlDbType.Char).Value = CifProveedor;

                returnParameter.Direction = ParameterDirection.ReturnValue;

                //Devuelve la primera columna de la primera fila insertada, en nuestro caso el código del pedido
                command.ExecuteNonQuery();
                result = (int)returnParameter.Value;

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

            return result;
        }
                
        /// <summary>
        /// Método que actualiza un pedido según su código al estado recibido por parámetro
        /// </summary>
        /// <param name="codigoPedido">int con código del pedido a actualizar</param>
        /// <param name="estadoPedido">string con el estado al que se va a actualizar el pedido</param>
        /// <returns>int con el número de filas afectadas</returns>
        public int ActualizarEstadoPedido(int codigoPedido, string estadoPedido)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();

            int filasAfectadas = 0;
            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.CommandText = "actualizarEstadoPedido";
                command.CommandType = CommandType.StoredProcedure;

                //Añade los parámetros del procedimiento
                command.Parameters.Add("@codigoPedido", SqlDbType.Int).Value = codigoPedido;
                command.Parameters.Add("@estadoPedido", SqlDbType.VarChar).Value = estadoPedido;

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

        /// <summary>
        /// Método que actualiza un pedido según su código al estado "Recibido"
        /// </summary>
        /// <param name="codigoPedido">int con código del pedido a actualizar</param>
        /// <returns>int con el número de filas afectadas</returns>
        public int RecibirPedido(int codigoPedido)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            SqlCommand command = new SqlCommand();

            int filasAfectadas = 0;
            try
            {
                connection = clsMyConnection.getConnection();
                command.Connection = connection;

                command.CommandText = "recibirPedido";
                command.CommandType = CommandType.StoredProcedure;

                //Añade los parámetros del procedimiento
                command.Parameters.Add("@codigoPedido", SqlDbType.Int).Value = codigoPedido;

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


        /// <summary>
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido que queremos cancelar.</param>
        public int cancelarPedido(int codigoPedido)
        {
            int filas;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand cmd = new SqlCommand(
                "cancelarPedido", connection);

                // Decimos que se trata de un procedure
                cmd.CommandType = CommandType.StoredProcedure;

                // Añadimos los parametros al procedure
                cmd.Parameters.Add(new SqlParameter("@CodigoPedido", codigoPedido));
                //Ejecutamos el procedimiento.
                filas = cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw e;
            }
            return filas;
        }

    }
}
