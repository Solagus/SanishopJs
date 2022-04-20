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
    new Producto(0, "./imgenes/griferia-fv/california.jpg", "Griferia California", 1, 5, 10000),
    new Producto(1, "./imgenes/Vanitorys/vanitory1.jpeg", "Vanitory 50X40X80", 1, 3, 13000),
    new Producto(2, "./imgenes/griferia-fv/Epuyen.jpg", "Griferia Epuyen", 1, 2, 15000),
    new Producto(3, "./imgenes/Accesorios/jabonera-dominic.jpg", "Jabonera Dominic", 1, 6, 5000),
    new Producto(4, "./imgenes/Asiento-de-inodoro/tapa-de-asiento-florencia.jpg", "Asiento Florencia", 1, 4, 10000),
    new Producto(5, "./imgenes/Accesorios/portarrollos-urbano.jpg", "Portarrollos Urbano", 1, 5, 4000)
]

let carrito = []

function actualizarDom(div, cantidades) {
    let cantidad = div.querySelector(".cantidad")
    cantidad.innerHTML = cantidades
}

let divCarrito = document.getElementById("carrito")

let li

function crearDropdown(){
    li = document.createElement("li")
    li.innerHTML = `
          <div class="filaDelCarrito d-flex justify-content-evenly">
            <p class="parrafo" >${carrito.nombre}<p>
            <p class="parrafo" >${carrito.cantidad} und.<p>
            <p class="parrafo" >$${carrito.precio}<p>
          <div>
    `
    divCarrito.append(li)
}
function actualizarCarrito(div, carrito){
    let actualizar = div.querySelector(".filaDelCarrito")
    actualizar.innerHTML = carrito.nombre
}


function crearCard(producto) {
    let div = document.createElement('div')
    div.innerHTML = `
        <div class="card mb-3 p-3 border" style="width: 18rem">
            <img src="${producto.imagen}" class="card-img-top" alt="..." style="height:20em">
            <div class="card-body">
               <div class="titulo">
                   <h5 class="card-title">${producto.nombre}</h5>
               </div>
               <div class="precio">
                   <p class="card-text">$${producto.precio}</p>
               </div>
               <div class="botones-cantidad d-flex p-2">
                   <button id="restar${producto.id}" class="btn btn-sm btn-card px-1" style="width: 2em" >-</button>
                   <p class="card-text px-1 cantidad">${producto.cantidad}</p>
                   <button id="sumar${producto.id}" class="btn btn-sm btn-card">+</button>
               </div>
               <div>
                   <button id="comprar${producto.id}" class="btn btn-card btn-comprar">Comprar
               <div>
        </div>
    `
    document.getElementById("containerCard").append(div)

    //botones
    let suma = document.getElementById(`sumar${producto.id}`)
    suma.onclick = () => {
        if (producto.cantidad < producto.maximo) {
            producto.cantidad++;
            actualizarDom(div, producto.cantidad)
        }
    }
    let resta = document.getElementById(`restar${producto.id}`)
    resta.onclick = () => {
        if (producto.cantidad > 0) {
            producto.cantidad--;
            actualizarDom(div, producto.cantidad)
        }
    }
    let comprar = document.getElementById(`comprar${producto.id}`)
    comprar.onclick = () => {
        carrito.push(producto)
        console.log(carrito)
        crearDropdown(divCarrito, li)
    }

}


for (i = 0; i < productos.length; i++) {
    crearCard(productos[i])
}

