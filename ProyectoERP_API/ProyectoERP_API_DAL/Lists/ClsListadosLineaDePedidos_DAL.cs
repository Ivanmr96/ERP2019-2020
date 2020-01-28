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
