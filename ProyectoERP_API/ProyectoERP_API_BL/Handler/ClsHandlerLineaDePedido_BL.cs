using ProyectoERP_API_DAL.Handler;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Handler{
    public class ClsHandlerLineaDePedido_BL{
        /// <summary>
        /// Nombre: getOrderLine
        /// Comentario: Este método nos permite obtener una línea de pedido de un producto y pedido determinado.
        /// Cabecera: public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido)
        /// </summary>
        /// <returns>Devuelve un tipo clsLineaPedido</returns>
        public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido){
            clsLineaPedido lineapedido;

            try {
                lineapedido = new ClsHandlerLineaDePedido_DAL().getOrderLine(codigoProducto, codigoPedido);
            } catch (Exception e) {
                throw e;
            }
            return lineapedido;
        }

        /// <summary>
        /// Borra una linea de pedido de un pedido concreto.
        /// </summary>
        /// <param name="codigoProducto">Codigo del producto</param>
        /// <param name="codigoPedido">Codigo del pedido</param>
        /// <returns>Numero de filas afectadas</returns>
        public int borrarLineaPedido(int codigoProducto, int codigoPedido) {
            int filas;
            ClsHandlerLineaDePedido_DAL handler = new ClsHandlerLineaDePedido_DAL();

            try {
                filas = handler.borrarLineaPedido(codigoProducto, codigoPedido);
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
            int filas;
            ClsHandlerLineaDePedido_DAL handler = new ClsHandlerLineaDePedido_DAL();

            try {
                filas = handler.insertarLineaPedidoEnPedido(lineaPedido);
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
        public int insertarPedidoCompleto(List<clsLineaPedido> lineaPedido, string CifProveedor){
            int resultado;

            try{
                ClsHandlerLineaDePedido_DAL hdp = new ClsHandlerLineaDePedido_DAL();
                resultado = hdp.insertarPedidoCompleto(lineaPedido, CifProveedor);
            }catch (Exception e){
                throw e;
            }
            return resultado;
        }

        //Métodos Diana:

        /// <summary>
        ///  Método que actualiza un línea de pedido según el código de producto y el código de pedido
        /// </summary>
        /// <param name="codigoProducto">int con código del producto a cuya línea se va a modificar</param>
        /// <param name="codigoPedido">int con código del pedido cuya línea se va a modificar</param>
        /// <param name="lineaPedidoAModificar">Objeto clsLineaPedido que se va a modificar</param>
        /// <returns>int filasAfectadas</returns>
        public int ActualizarLineaPedidoPorIdProductoIdPedido(int codigoProducto, int codigoPedido, int nuevaCantidad){
            ClsHandlerLineaDePedido_DAL objOperaciones = new ClsHandlerLineaDePedido_DAL();
            int filasAfectadas;

            try {
                filasAfectadas = objOperaciones.ActualizarLineaPedidoPorIdProductoIdPedido(codigoProducto, codigoPedido, nuevaCantidad);
            } catch (Exception e) {
                throw e;
            }

            return filasAfectadas;
        }
    }
}
