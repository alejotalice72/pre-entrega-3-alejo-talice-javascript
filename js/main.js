// PreEntrega 3 Alejo Talice
const carrito = [];
const listaDeAsientos = [];
// Functions
const revisarEstadoDelAsiento = (estado) => {
    if (estado == true) {
        return "asiento--ocupado";
    } else {
        return "asiento--libre";
    }
};
const agregarACarrito = (lugar) => {
    carrito.push(lugar);
    renderizarCarrito();
    renderizarTotal();
};
const eliminarDeCarrito = (lugar) => {
    let indice = carrito.findIndex((element)=> {
        if (element.numero == lugar.numero){
            return true;
        } else {
            return false;
        }
    });
    carrito.splice(indice,1);
    renderizarCarrito();
    renderizarTotal();
};
// Object Asiento
class Asiento {
    constructor(numero, estado) {
        this.numero = numero;
        this.estado = estado;
        this.precio = 100;
    }
}
// Generate asientos 
for(let i = 1; i <= 20; i++) {   
    const asiento = new Asiento(i, false);
    listaDeAsientos.push(asiento);
};
// Renderizar Carrito
const renderizarCarrito = () => {
    // <i class="fa-regular fa-circle-xmark"></i>
    // const deleteElement = document.getElementsByClassName('delete');
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = "";
    for (const elementoCarrito of carrito) {
        let cartElement = document.createElement('div');
        let deleteElement = document.createElement('i');
        deleteElement.className = "fa-regular fa-circle-xmark";
        cartElement.className = "row asientosSeleccionados mt-3";
        cartElement.innerHTML = `
                                <div class="col-6">Entrada N°${elementoCarrito.numero}</div>
                                <div class="col-4">${elementoCarrito.precio}</div>
                                <div class="col-2"></div>`;
        carritoContainer.append(cartElement);
    }
};
const renderizarTotal = () => {
    const totalContainer = document.getElementById('total');
    totalContainer.innerHTML = "";
    let precioTotal = 0;
    for (const totalProductos of carrito) {
        precioTotal += totalProductos.precio;
    }
    let totalElement = document.createElement('div'); 
    totalElement.className = "row total mt-4";
    totalElement.innerHTML = `
                            <div class="col-6">Total: $${precioTotal}</div>
                            <div class="col-6"><button type="button" class="btn btn-outline-success">COMPRAR</button></div>`;
    totalContainer.append(totalElement);
};
// Renderizar Asientos
const elegirAsientoContainer = document.getElementById('elegirAsiento');
for (const lugar of listaDeAsientos) {
    let asiento = document.createElement('div');
    asiento.className = "asiento " + revisarEstadoDelAsiento(lugar.estado);
    asiento.innerHTML = ` <p class="asiento__numero"> ${lugar.numero} </p> `;
    asiento.addEventListener("click", ()=> {
        if (lugar.estado == true) {
            alert("Este lugar se encuentra ocupado");
        }
        else if (asiento.className == "asiento asiento--enEspera") {
            asiento.className = "asiento asiento--libre";
            eliminarDeCarrito(lugar);
        }
        else {
            asiento.className = "asiento asiento--enEspera";
            agregarACarrito(lugar);
        }
    });
    elegirAsientoContainer.append(asiento);
}