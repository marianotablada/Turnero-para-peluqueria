const botonContinuar = document.getElementById("botonContinuar");
const botonFinalizar = document.getElementById("botonFinalizar");
const botonAceptar = document.getElementById("botonAceptar");
const tituloPrincipal = document.getElementById("brand");
const botonAgendarTurno = document.getElementById("buttonAgendar")
const botonConsultarTurno = document.getElementById("buttonConsultaTurno")
let mensajeFinal = document.getElementById("mensajeFinal");
let inputNombre = document.getElementById("inputNombre");
let inputTell = document.getElementById("tel");
const formulario1 = document.getElementById("formulario1");
const seccionPrincipal = document.getElementById("main_firstSeccion");
const seccionFormulario = document.querySelector(".main_secondSection");
const seccionCalendario = document.getElementById("main_therdSection");
let checks = document.querySelectorAll(`.valores`);
let mybotonContinuar = document.getElementById("mybotonContinuar");
let menuHorarios = document.getElementsByClassName("cell");
let inputFecha = document.getElementById("dp1")
let contenedorDeHorarios = document.querySelector(".main_horarios");

// Funciones asyn

setTimeout(() => {
    console.log(window.matchMedia(`(prefers-color-scheme: dark)`).matches); //función para detectar si las preferencias del usuario es dark, valor booleano
}, 1);

setTimeout(() => {
    $(document).ready( () => {
        $('.datepicker').datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            startDate: '0d',
            zIndexOffset: 60,
            todayHighlight: true,
            todayBtn: true
        });
    $('.cell').click(function(){
            $('.cell').removeClass('select');
            $(this).addClass('select');
        });    
    });
    console.log("se activó la función para el calendario");
}, 2);

function chequearFormularioEnviado (){
    const formularioEnviado = localStorage.getItem("turno");
    if (formularioEnviado !== null){
        console.log("Ya se registró un turno desde este dispositivo");    
    }else{
        console.log("Aún NO se registró ningún turno desde este dispositivo");
        botonConsultarTurno.style.display = "none";
    }
}
chequearFormularioEnviado ();

//ARRAYS

const Turnero = []
const personas = ["Vanesa", "Brian", "Micaela", "Flor"]
const Tiempos = [30, 20, 40, 45, 90, 60, 40]
const Horarios = ["10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "13:00PM", "13:30PM", "14:00PM", "14:30PM", "15:00PM", "15:30PM", "16:00PM", "16:30PM", "17:00PM", "17:30PM", "18:00PM", "18:30PM", "19:00PM"]
const servicios = ["Corte", "Peinado", "Corte y peinado", "Tintura", "Tintura y Corte"]

servicios.push ("Maquillaje");
servicios.push ("Uñas");

//DOM´s
const select = document.getElementById("select");

for(let i=0; i< servicios.length; i++) {
    const option = document.createElement("option");
    option.innerText = servicios[i];
    option.value = servicios[i];
    select.append(option);
}

// Construcción del DOM de manera dinámica
const select2 = document.getElementById("select2");
for(let i=0; i< personas.length; i++) {
    const option = document.createElement("option"); // qué tipo de TAG quiero agregar
    option.innerText = personas[i]; // qué datos voy a agregar
    option.value = personas[i]; // qué valor va a tener
    select2.append(option); // dondé lo va a agregar?
}

contenedorDeHorarios.addEventListener("click", function () {
    tween9.play();
    console.log(document.querySelector(".cell.select").innerText);
});

let turnoIdRegistrado = Math.random()*400;

//EVENTOS
botonAgendarTurno.addEventListener("click", () =>  {
        tweenButtonAgendar.play();
        tweenButtonConsultaTurno.play();
        seccionPrincipal.style.height = 240 + `px`;
        tween.play();  //esto están en el scriptGSAP
        tween2.play(); //esto están en el scriptGSAP
        tween3.play(); //esto están en el scriptGSAP
        tween5.play(); //esto están en el scriptGSAP
        turnoIdRegistrado = Math.floor(turnoIdRegistrado+1);
        botonConsultarTurno.style.display = "none";
        botonAgendarTurno.style.display ="none";
        seccionFormulario.style.display = "inline-block";
        /* ESTA FUNCIÓN LA UTILIZABA PARA RECORRER EL ARRAY DONDE ALMACENO LOS TURNOS, aplica un filtro por empleado Y CUANDO EL TIEMPO POR SERVICIOS (CORTE, TINTURA, ETC.) LLEGA A SUMAR 480 QUE SON LOS MINUTOS DE TRABAJO EN UN DÍA NORMAL, EN EL SELECT DE LOS "EMPLEADOS" SE ELIMINA ESE EMPLEADO. Pero todo esto no lo puedo utilizar ahora porque cuando se hace click en el botón finalizar, se carga de nuevo la pagina y comienza desde 0 todo sin almacenar datos en el array de turnos
        setTimeout(() => {
        for(let i=0; i< personas.length; i++) {
        const turnosFiltrados = Turnero.filter((turno) => {
            return turno.profesional.includes(personas[i]);
        });
        const sumall = turnosFiltrados.map(item => item.tiempo).reduce((prev, curr) => prev + curr, 0);
            console.log(sumall);
            if(sumall < 480){
            console.log(i);
        }else{
            select2.remove(i);
            }; 
         sumall < 480 ? console.log(i) : select2.remove(i); // Operador ternario
        };
    }, 1);
    */
});

botonConsultarTurno.addEventListener("click", () => {
    // una vez que tenga desarrollado el server de NODE JS y pueda enviar los datos con un POST, la consulta de un turno se realizaría de esta menera
    swal({
        text: 'Ingrese el nombre de la película', 
        content: "input",
        button: {
            text: "Buscar!",
            closeModal: false,
            },
        })
        .then(name => {
        if (!name) throw null;
        return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
        })
        .then(results => {
        return results.json();
        })
        .then(json => {
        const movie = json.results[0];
        if (!movie) {
            return swal("No tenemos un turno registrado con ese número, por favor, comunicate con nuestro atención al cliente para ayudarte");
        }
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        swal({
            title: "Top result:",
            text: name,
            icon: imageURL,
            });
        })
        .catch(err => {
        if (err) {
            swal("No tenemos un turno registrado con ese número, por favor llama al siguiente número: 34513451345 para ayudarte con el problema");
        } else {
            swal.stopLoading();
            swal.close();
        }
        });
});

inputTell.addEventListener("change", () => {
    tween8.play();
});

botonContinuar.addEventListener("click", () => {
    console.group("Post 1")
    console.log(turnoIdRegistrado);
    console.log(inputNombre.value);
    console.log(select.value);
    console.log(Tiempos[servicios.indexOf(select.value)]);
    console.log(select2.value);
    console.log(inputTell.value);
    console.groupEnd();
    seccionCalendario.style.display = "inline-block";
    function scrollWin() {
        window.scrollBy({
            top: 600,
            left: 0,
            behavior: 'smooth'
        });
    }
    scrollWin();
});

botonContinuar.addEventListener("click",function(){
    checks.forEach((e) => {
        if(e.checked == true){
            console.log(e.value); 
            if(e.value === `cafe`){
            swal(`Te vamos a esperar con un rico Café!`);
            }else if(e.value === `mate`){
                swal(`Te vamos a esperar con un rico Mate!`);
            }else{
                console.log("no quiere recibir nada");
            };
        };
    });
});

function handler(e){
    console.log(e.target.value);
    gsap.to(".cell", {
        autoAlpha: 1,  
        duration: 1,
        delay: 1
    });
}

botonAceptar.addEventListener("click", () => {
    let horarioSeleccionado = document.querySelector(".cell.select");
    console.log(inputFecha.value);
    const turno = {
        turnoId: turnoIdRegistrado,
        nombre: inputNombre.value,
        motivo: select.value,
        día: inputFecha.value,
        hora: horarioSeleccionado.innerText,
        profesional: select2.value,
        tiempo: Tiempos[servicios.indexOf(select.value)],
        tel: inputTell.value,
    };
    mensajeFinal.style.display = "inline-block";
    let mensajeFinalNombreCliente = document.createElement("h2");
    mensajeFinalNombreCliente.innerHTML = `<h2></h2>`;
    mensajeFinalNombreCliente.innerText =   `Muchas gracias ${inputNombre.value}!
                                            Tienes un turno para: ${select.value}
                                            Con: ${select2.value}
                                            El: ${inputFecha.value} 
                                            A las: ${horarioSeleccionado.innerText}`;
    mensajeFinal.append(mensajeFinalNombreCliente);
    Turnero.push(turno);
    console.log(Turnero);
//JSON
    const enJSON = JSON.stringify(turno);
    localStorage.setItem("turno", enJSON);
    const ConsultaDeTurno = JSON.parse(enJSON);
    console.log(ConsultaDeTurno);
    console.log(ConsultaDeTurno.turnoId);
    seccionCalendario.style.display = "none";
    swal({
        title: `Muchas gracias ${inputNombre.value}!`,
        text: `Tu turno es el número: ${turnoIdRegistrado}`,
        icon: "success",
        button: "Finalizar",
    });
    seccionFormulario.style.display = "none";
});

//EVENTO - Sumit

formulario1.addEventListener("submit", (event) => {
    event.preventDefault();
});

botonFinalizar.addEventListener("click", () => {
    location.reload();
});

/* + de local Storage
for (let i = 0; i < localStorage.length; i++){
    const clave = localStorage.key (i);
    const valor = localStorage.getItem(clave);
    console.log(`Para la clave: ${clave}, el valor es: ${valor} `);
};
*/

// Local Storage 
// localStorage.removeItem("turnos");
// localStorage.clear();