/*
class Persona {
    constructor (nombre, especializacion){
        this.nombre = nombre
        this.especializacion = especializacion
    }
}

const empleado1 = new Persona ("Vanesa", "tintura")
const empleado2 = new Persona ("Brian", "corte")
const empleado3 = new Persona ("Micaela", "maquillaje")
const empleado4 = new Persona ("Flor", "uñas")
*/

const turnero = []

const personas = ["Vanesa", "Brian", "Micaela", "Flor"]

/* const serviciosPrueba = [{id: 1, motivo: "corte", tiempo: 30},
                {id: 2, motivo: "peinado", tiempo: 20},
                {id: 3, motivo: "corte+peinado", tiempo: 40},
                {id: 4, motivo: "tintura", tiempo: 45},
                {id: 5, motivo: "tintura+corte", tiempo: 90},]

serviciosPrueba.push ({id: 6, motivo: "maquillaje", tiempo: 60});
serviciosPrueba.push ({id: 7, motivo: "uñas", tiempo: 40});
*/


//DOM´s

const servicios = ["Corte", "Peinado", "Corte y peinado", "Tintura", "Tintura y Corte"]

servicios.push ("Maquillaje");
servicios.push ("Uñas");

const select = document.getElementById("select");

for(let i=0; i< servicios.length; i++) {
    const option = document.createElement("option");
    option.innerText = servicios[i];
    option.value = servicios[i];
    select.append(option);
}

/* captar en un EVENT cada cambio en select
select.addEventListener("change", () => {
    console.log(select.value);
});
*/

const select2 = document.getElementById("select2");

for(let i=0; i< personas.length; i++) {
    const option = document.createElement("option");
    option.innerText = personas[i];
    option.value = personas[i];
    select2.append(option);
}

const botonAceptar = document.getElementById("botonAceptar");
const botonContinuar = document.getElementById("botonContinuar");
const tituloPrincipal = document.getElementById("brand");
const botonAgendarTurno = document.getElementById("buttonAgendar")
const mensajeFinal = document.getElementById("mensajeFinal");
const inputNombre = document.getElementById("inputNombre");

const Tiempos = [30, 20, 40, 45, 90, 60, 40]

// CALENDARIO

const date = new Date();

const renderCalendar = () => {
date.setDate(1);

const monthsDays = document.querySelector(".days")

const lastDay = new Date(date.getFullYear(),
date.getMonth()+ 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay()

const lastDayIndex = new Date(date.getFullYear(),
date.getMonth()+ 1, 0).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date h1").innerHTML = months [date.getMonth()];
document.querySelector(".date p").innerHTML 
= new Date().toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class= "prev-date">${prevLastDay - x + 1}</div>`;
}

for(let i= 1; i <=lastDay; i++) {
    if(i === new Date().getDate()&&date.getMonth()=== new Date().getMonth()){
        days += `<div class="today">${i}</div>`;    
    }else {
        days += `<div>${i}</div>`;
    }
}

for(let j = 1; j <= nextDays; j++) {
    days += `<div class= "next-date">${j}</div>`;
    monthsDays.innerHTML = days;
}
}

document.querySelector(`.prev`).addEventListener("click",() => {
date.setMonth(date.getMonth() - 1);
    renderCalendar ();
});


document.querySelector(`.next`).addEventListener("click",() => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar ();
});

renderCalendar ();


//EVENTOS

botonAgendarTurno.addEventListener("click", () =>  {
    //alert("Se hizo click sobre el boton Agendar Turno");
    tituloPrincipal.style.marginLeft = 40+'%';
    botonAgendarTurno.style.display = "none";
});

//Opción 2-
/* botonAgendarTurno.onclikn = () => {
    alert("Se hizo click sobre el boton Agendar Turno");
}
*/

// captar en un EVENT la opción seleccionada en el select
botonAceptar.addEventListener("click", () => {
    console.log(inputNombre.value);
    console.log(select.value);
    
});


botonContinuar.addEventListener("click", () => {
    console.log(select2.value);

    const turno = {
        nombre: inputNombre.value,
        motivo: select.value,
        // día:
        // hora:
        profesional: select2.value,
    };
    let mensajeFinalNombreCliente = document.createElement("h2");
    mensajeFinalNombreCliente.innerHTML = `<h2></h2>`;
    mensajeFinalNombreCliente.innerText = "Muchas gracias!";
    mensajeFinalNombreCliente.className = "tituloFinal";
    mensajeFinal.append(mensajeFinalNombreCliente);

    let mensajeFinalMotivo = document.createElement("h2");
    mensajeFinalMotivo.innerHTML = `<h2></h2>`;
    mensajeFinalMotivo.innerText = "Tienes un turno para: ";
    mensajeFinalMotivo.className = "motivoFinal";
    mensajeFinal.append(mensajeFinalMotivo);

    turnero.push(turno);
    
    console.log(turnero);
});


//EVENTOS -Sumit

const formulario1 = document.getElementById("formulario1");

formulario1.addEventListener("submit", (event) => {
    event.preventDefault();
});

const formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit", (event) => {
    event.preventDefault();
});


