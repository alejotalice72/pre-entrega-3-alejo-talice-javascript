// PreEntrega 3 Alejo Talice
const listaDeAsientos = [{numero: 1, titular: "", estado: false},
                        {numero: 2, titular: "", estado: true},
                        {numero: 3, titular: "", estado: false},
                        {numero: 4, titular: "", estado: false},
                        {numero: 5, titular: "", estado: false},
                        {numero: 6, titular: "", estado: false},
                        {numero: 7, titular: "", estado: false},
                        {numero: 8, titular: "", estado: true},
                        {numero: 9, titular: "", estado: true},
                        {numero: 10, titular: "", estado: false}];

const revisarEstadoDelAsiento = (estado) => {
    if (estado == true) {
        return "asiento--ocupado";
    } else {
        return "asiento--libre";
    }
};

class Asiento {
    constructor(numero, titular, estado) {
        this.numero = numero;
        this.titular = titular;
        this.estado = estado;
        this.precio = 100;
    }
}

const elegirAsientoContainer = document.getElementById('elegirAsiento');
for (const lugar of listaDeAsientos) {
    let asiento = document.createElement('div');
    asiento.className = "asiento " + revisarEstadoDelAsiento(lugar.estado);
    asiento.innerHTML = ` <p class="asiento__numero"> ${lugar.numero} </p> `;
    asiento.addEventListener("click", ()=> {
        if (lugar.estado == true) {
            alert("Este lugar se encuentra ocupado ocupado");
        }
        else {
            console.log("Hola");
        }
    });
    elegirAsientoContainer.append(asiento);
}

