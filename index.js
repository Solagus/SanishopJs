
import {productos} from "./productos.js"

let carrito = []
let carritoJSON

//fetch y productos json

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
      carritoJSON = data
  })

//Dropdown

let li
let divCarrito = document.getElementById("carrito")
let divDelLi =document.getElementById("lista")

function crearDropdown(divi){
    for (i of carritoJSON){
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
    let botonEliminar = document.getElementById(`btn-eliminar${i.id}`)
    let finalizarCompra = document.getElementById("finalizarCompra")
    if (carrito != ""){
        finalizarCompra.addEventListener("click", () => {
            let confirm = Swal.fire({
                title: "Esta seguro que desea finalizar la compra?",
                icon: "question",
                confirmButtonText: "Estoy seguro",
                allowOutsideClick: true,
                confirmButtonColor: "#85bdbf",
                showCloseButton: true
             })
        })
    }
}


//Finaliza el dropdown

//Crear las Cards y los botones​⁡

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

    //Botones

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
        divDelLi.innerHTML = ""
        crearDropdown(divDelLi)
    
    }

}

for (i = 0; i < productos.length; i++) {
    crearCard(productos[i])
}
