function calcularDescuento(precio, descuento){
    const porcentacePrecioConDescuento = 100 - descuento;
    const precioConDescuento= (precio * porcentacePrecioConDescuento)/100;
    
    return precioConDescuento;    
}
