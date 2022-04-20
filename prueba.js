class Producto {
    constructor(id, imagen, nombre, cantidad, maximo, precio) {
        this.id = id
        this.imagen = imagen,
        this.nombre = nombre,
        this.cantidad = 1,
        this.maximo = maximo,
        this.precio = precio
    }
}

let productos = [
    new Producto(0, "./imagenes/griferia-fv/california.jpg", "Griferia California", 1, 5, 10000),
    new Producto(1, "./imagenes/Vanitorys/vanitory1.jpeg", "Vanitory 50X40X80", 1, 3, 13000),
    new Producto(2, "./imagenes/griferia-fv/Epuyen.jpg", "Griferia Epuyen", 1, 2, 15000),
    new Producto(3, "./imagenes/Accesorios/jabonera-dominic.jpg", "Jabonera Dominic", 1, 6, 5000),
    new Producto(4, "./imagenes/Asiento-de-inodoro/tapa-de-asiento-florencia.jpg", "Asiento Florencia", 1, 4, 10000),
    new Producto(5, "./imagenes/Accesorios/portarrollos-urbano.jpg", "Portarrollos Urbano", 1, 5, 4000)
]

let carrito = []

function actualizarDom(div, cantidades) {
    let cantidad = div.querySelector(".cantidad")
    cantidad.innerHTML = cantidades
}

for (i = 0; i < productos.length; i++) {
    crearCard(productos[i])
}


