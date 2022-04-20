let li
let divCarrito = document.getElementById("carrito")


function crearDropdown(divi){
    for (let i of carrito){
        li = document.createElement("li")
        li.innerHTML = `
          <div class="filaDelCarrito d-flex justify-content-evenly">
            <p class="parrafo" >${i.nombre}<p>
            <p class="parrafo" >${i.cantidad} und.<p>
            <p class="parrafo" >$${i.precio}<p>
          <div>
          `
          divi.append(li)
    }
}

