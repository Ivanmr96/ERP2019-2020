class clsPedido 
{
    constructor(codigo, estado, fechaPedido, fechaRecepcion, lineasDePedido, cifProveedor, precioTotal, nombreRazonSocial)
    {
        this.codigo = codigo;
        this.estado = estado;
        this.fechaPedido = fechaPedido;
        this.fechaRecepcion = fechaRecepcion;
        this.cifProveedor = cifProveedor;
        this.lineasDePedido = lineasDePedido;
        this.lineasDePedido = [
            new clsLineaPedido(1, this.codigo, 5, 2.30, 'euro')
        ];
        this.precioTotal = precioTotal;
        this.nombreRazonSocial = this.nombreRazonSocial;
    }
}