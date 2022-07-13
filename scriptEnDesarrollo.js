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
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
];

document.querySelector(".date h1").innerHTML = months [date.getMonth()];
document.querySelector(".date p").innerHTML = new Date().toDateString();

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
const Tiempos = [30, 20, 40, 45, 90, 60, 40]
const servicios = ["Corte", "Peinado", "Corte y peinado", "Tintura", "Tintura y Corte"]

servicios.push ("Maquillaje");
servicios.push ("Uñas");

/* const serviciosPrueba = [{id: 1, motivo: "corte", tiempo: 30},
                {id: 2, motivo: "peinado", tiempo: 20},
                {id: 3, motivo: "corte+peinado", tiempo: 40},
                {id: 4, motivo: "tintura", tiempo: 45},
                {id: 5, motivo: "tintura+corte", tiempo: 90},]

serviciosPrueba.push ({id: 6, motivo: "maquillaje", tiempo: 60});
serviciosPrueba.push ({id: 7, motivo: "uñas", tiempo: 40});
*/

//DOM´s

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
const botonFiltrar = document.getElementById("botonFiltrar");
const botonContinuar = document.getElementById("botonContinuar");
const tituloPrincipal = document.getElementById("brand");
const botonAgendarTurno = document.getElementById("buttonAgendar")
const mensajeFinal = document.getElementById("mensajeFinal");
const inputNombre = document.getElementById("inputNombre");
const imagen = document.getElementsByClassName("imagen_page_1");
const formulario1 = document.getElementById("formulario1");
const seccionPrincipal = document.getElementById("main_firstSeccion");
const seccionCalendario = document.getElementById("main_therdSection");

//EVENTOS

botonAgendarTurno.addEventListener("click", () =>  {
    //alert("Se hizo click sobre el boton Agendar Turno");
    botonAgendarTurno.style.display = "none";
    formulario1.style.display = "flex";
    seccionPrincipal.style.height = 700 + `px`;
    
});
//Opción 2-
/* botonAgendarTurno.onclikn = () => {
    alert("Se hizo click sobre el boton Agendar Turno");
}
*/

// captar en un EVENT la opción seleccionada en el select

// SESION STORAGE

botonAceptar.addEventListener("click", () => {
    console.log(inputNombre.value);
    console.log(select.value);
    console.log(servicios.indexOf(select.value));
    console.log(Tiempos[servicios.indexOf(select.value)]);
    console.log(select2.value);
    seccionCalendario.style.display = "inline-block";

    sessionStorage.setItem("nombre ingresado", (inputNombre.value));
    sessionStorage.setItem("servicio seleccionado", (select.value));
    sessionStorage.setItem("profesional seleccionado", (select2.value));

});

botonContinuar.addEventListener("click", () => {

    const turno = {
        nombre: inputNombre.value,
        motivo: select.value,
        // día:
        // hora:
        profesional: select2.value,
        tiempo: Tiempos[servicios.indexOf(select.value)],
    };
    mensajeFinal.style.display = "inline-block";
    
    let mensajeFinalNombreCliente = document.createElement("h2");
    mensajeFinalNombreCliente.innerHTML = `<h2></h2>`;
    mensajeFinalNombreCliente.innerText =   `Muchas gracias ${inputNombre.value}!
                                            Tienes un turno para: ${select.value}
                                            Con: ${select2.value}
                                            El día: 
                                            A las: `;
    mensajeFinalNombreCliente.className = "tituloFinal";
    mensajeFinal.append(mensajeFinalNombreCliente);

    turnero.push(turno);
    
    console.log(turnero);
    localStorage.setItem("turnoRegistrado", 1);
    
    //JSON

    const enJSON = JSON.stringify(turno);
    localStorage.setItem("turno", enJSON);
    
    // localStorage.setItem("turno", turno);
});

//EVENTOS -Sumit

formulario1.addEventListener("submit", (event) => {
    event.preventDefault();
});

/* 
const formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit", (event) => {
    event.preventDefault();
});
*/


gsap.to(`.brand`, {
    duration: 1,
    y: -55,
    delay: 2,
    fontSize: `100px`,
});

gsap.to(`.brand2`, {
    duration: 1,
    y: -55,
    delay: 2,
});

gsap.to(`.imagen_page_1`, {
    y: 55,
    duration: 1,
    delay: 2,
    display: `none`,

}); 

/*
botonFiltrar.addEventListener("click", () => {
    
    const nombreDelProfesionalElegido = select2.value;
    
    const turnosFiltrados = turnero.filter((turno) => {
    
        return turno.profesional.includes(nombreDelProfesionalElegido);
    });

    console.log(turnosFiltrados);

});
*/ 

//El botón filtro lo agregué para probar haber si funcionaba el código para la entrega final no va a estar
// Con este código genero 4 nuevos arrays con los turnos filtrado por "profesionales" del array Turnero, y luego hago la suma de los tiempos de cada servicio
// Este es el código que voy a utilizar más adelante para limitar la cantidad de turnos que se van a poder generar
botonFiltrar.addEventListener("click", () => {
const turnosFiltrados = turnero.filter((turno) => {
    return turno.profesional.includes("Vanesa");
});
console.log(turnosFiltrados);
const sumall = turnosFiltrados.map(item => item.tiempo).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);

});

botonFiltrar.addEventListener("click", () => {
    const turnosFiltrados = turnero.filter((turno) => {
    return turno.profesional.includes("Brian");
    }); 
    const sumall = turnosFiltrados.map(item => item.tiempo).reduce((prev, curr) => prev + curr, 0);
    console.log(sumall);
});

botonFiltrar.addEventListener("click", () => {
    const turnosFiltrados = turnero.filter((turno) => {
    return turno.profesional.includes("Flor");
    });
    const sumall = turnosFiltrados.map(item => item.tiempo).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);
});

botonFiltrar.addEventListener("click", () => {
    const turnosFiltrados = turnero.filter((turno) => {
        return turno.profesional.includes("Micaela");
    });
    const sumall = turnosFiltrados.map(item => item.tiempo).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);
// + sesionStorage
for (let i = 0; i < sessionStorage.length; i++){
    const clave = sessionStorage.key (i);
    const valor = sessionStorage.getItem(clave);
    console.log(`Para la clave: ${clave}, el valor es: ${valor} `);
}
});

function chequearFormularioEnviado (){
    const formularioEnviado = localStorage.getItem("turnoRegistrado");
    if (formularioEnviado !== null){
        console.log("Se registró un turno desde este dispositivo");
    }else{
        console.log("Aún no se registró ningún turno desde este dispositivo");
    }
}

chequearFormularioEnviado();
/* Con el siguiente código había eliminado datos del localStorage que cargue mientras practicaba

localStorage.removeItem("turnos");
*/