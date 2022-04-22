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

//⁡⁣⁢⁣​‌‍‌𝕕𝕣𝕠𝕡𝕕𝕠𝕨𝕟​⁡

let li
let divCarrito = document.getElementById("carrito")
let divDelLi =document.getElementById("lista")

function crearDropdown(divi){
    for (i of JSON.parse(localStorage.getItem("carrito"))){
        li = document.createElement("li")
        li.innerHTML = `
          <div class="filaDelCarrito d-flex justify-content-evenly">
            <p class="parrafo" >${i.nombre}<p>
            <p class="parrafo" >${i.cantidad} und.<p>
            <button class="btn" id="btn-eliminar${i.id}"><img src="./imagenes/105739.png" style="width: 1em; height: 1em; margin-top: -0.8em;" alt=""></button>
            <p class="parrafo">$${i.precio*i.cantidad}<p>
          <div>
          `
        divi.append(li)
    }
}

//⁡⁣⁢⁣​‌‍‌𝕗𝕚𝕟𝕒𝕝𝕚𝕫𝕒 𝕖𝕝 𝕕𝕣𝕠𝕡𝕕𝕠𝕨𝕟​⁡

//⁡⁢⁣⁣​‌‍‌𝕔𝕒𝕣𝕕𝕤 𝕪 𝕓𝕠𝕥𝕠𝕟𝕖𝕤​⁡

function actualizarDom(div, cantidades) {
    let cantidad = div.querySelector(".cantidad")
    cantidad.innerHTML = cantidades
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
    
    //​‌‍‌⁡⁢⁢⁣⁡⁢⁣⁢𝕓𝕠𝕥𝕠𝕟𝕖𝕤⁡⁡​
    
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
        if (carrito.find((el) => el.nombre == producto.nombre)){
            producto.cantidad++;
        }
        else{
            carrito.push(producto)
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log(carrito)
        divDelLi.innerHTML = ""
        crearDropdown(divDelLi)
    
    }

}

//​‌‍‌⁡⁢⁣⁣𝕗𝕚𝕟𝕒𝕝𝕚𝕫𝕒𝕟 𝕔𝕒𝕣𝕕𝕤 𝕪 𝕓𝕠𝕥𝕠𝕟𝕖𝕤⁡​


for (i = 0; i < productos.length; i++) {
    crearCard(productos[i])
}
