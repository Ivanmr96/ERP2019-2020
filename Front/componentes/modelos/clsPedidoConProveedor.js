class clsPedidoConProveedor
{
    constructor(codigo, estado, fechaPedido, fechaRecepcion, lineasDePedido, 
        cif, nombreRazonSocial, direccion,telefono, email
        )
    {
        this.codigo = codigo;
        this.estado = estado;
        this.fechaPedido = fechaPedido;
        this.fechaRecepcion = fechaRecepcion;
        this.lineasDePedido = lineasDePedido;
        this.lineasDePedido = [
            new clsLineaPedido(1, this.codigo, 5, 2.30, 'euro')
        ],
        this.cif = cif,
        this.nombreRazonSocial = nombreRazonSocial, 
        this.direccion = direccion,
        this.telefono = telefono, 
        this.email = email
    }
}