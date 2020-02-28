using ProyectoERP_API_Entities;

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using ProyectoERP_API_DAL.Connection;
using System.Threading.Tasks;

namespace ProyectoERP_API_DAL.Lists
{
    public class ClsListadosPedidos_DAL
    {

        /// <summary>
        /// Obtiene todos los pedidos de la BBDD
        /// </summary>
        /// <returns>Devuelve una lista con todos los pedidos</returns>
        public List<clsPedido> getPedidosList()
        {
            List<clsPedido> listadoPedidos = new List<clsPedido>();

            SqlDataReader reader = null;
            
            clsMyConnection clsMyConnection = new clsMyConnection();
            
            SqlConnection connection = null;
            
            clsPedido pedido;
            
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.CommandText = "SELECT * FROM ERP_Pedidos";
                sqlCommand.Connection = connection;

                reader = sqlCommand.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        pedido = new clsPedido();


                        if (!reader.IsDBNull(reader.GetOrdinal("Codigo")))
                        {
                            
                            pedido.Codigo = (int)reader["Codigo"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("Estado")))
                        {

                            pedido.Estado = ((string)reader["Estado"]);
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("FechaPedido")))
                        {

                            pedido.FechaPedido = (DateTime)reader["FechaPedido"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("FechaRecepcion")))
                        {

                            pedido.FechaRecepcion = (DateTime)reader["FechaRecepcion"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("CIFProveedor")))
                        {

                            pedido.CifProveedor = (string)reader["CIFProveedor"];
                        }


                        listadoPedidos.Add(pedido);
                    }
                }
            }
            catch (SqlException e)
            {
                throw e;
            }
            finally
            {
                if (reader != null)
                {
                    reader.Close();
                }
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return listadoPedidos;
        }


        /// <summary>
        /// Obtiene un objeto pedido dada su ID
        /// </summary>
        /// <param name="id"> La ID del pedido</param>
        /// <returns>Objeto pedido correspondiente a la ID dada</returns>
        public clsPedido getPedido(int id)
        {
            clsPedido pedido = new clsPedido();

            SqlDataReader reader = null;

            clsMyConnection clsMyConnection = new clsMyConnection();

            SqlConnection connection = null;

            

            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.Parameters.AddWithValue("@id", id);
                sqlCommand.CommandText = "SELECT * FROM ERP_Pedidos where Codigo = @id";
                sqlCommand.Connection = connection;

                reader = sqlCommand.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        pedido = new clsPedido();

                        if (!reader.IsDBNull(reader.GetOrdinal("Codigo")))
                        {

                            pedido.Codigo = (int)reader["Codigo"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("Estado")))
                        {

                            pedido.Estado = ((string)reader["Estado"]);
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("FechaPedido")))
                        {

                            pedido.FechaPedido = (DateTime)reader["FechaPedido"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("FechaRecepcion")))
                        {

                            pedido.FechaRecepcion = (DateTime)reader["FechaRecepcion"];
                        }

                        if (!reader.IsDBNull(reader.GetOrdinal("CIFProveedor")))
                        {

                            pedido.CifProveedor = (string)reader["CIFProveedor"];
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                throw e;
            }
            finally
            {
                if (reader != null)
                {
                    reader.Close();
                }
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return pedido;
        }
    }
}
