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
        //let resumen = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        //console.log(resumen)
        crearDropdown(divCarrito)
    }
}