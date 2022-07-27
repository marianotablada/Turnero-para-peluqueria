setTimeout(() => {
    console.log(window.matchMedia(`(prefers-color-scheme: dark)`).matches); //función para detectar si las preferencias del usuario es dark, valor booleano
}, 1);

function chequearFormularioEnviado (){
    const formularioEnviado = localStorage.getItem("turno");
    // swal("Bienvenido/a !");
    if (formularioEnviado !== null){
        console.log("Ya se registró un turno desde este dispositivo");
        // tween6.play();    
    }else{
        console.log("Aún NO se registró ningún turno desde este dispositivo");
        botonConsultarTurno.style.display = "none";
    }
}
chequearFormularioEnviado ();

const Turnero = []
const personas = ["Vanesa", "Brian", "Micaela", "Flor"]
const Tiempos = [30, 20, 40, 45, 90, 60, 40]
const Horarios = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"]
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

/* captar en un EVENT cada cambio en select
select.addEventListener("change", () => {
    console.log(select.value);
});
*/

const select2 = document.getElementById("select2");

for(let i=0; i< personas.length; i++) {
    const option = document.createElement("option"); // qué tipo de TAG quiero agregar
    option.innerText = personas[i]; // qué datos voy a agregar
    option.value = personas[i]; // qué valor va a tener
    select2.append(option); // dondé lo va a agregar?
}

const botonContinuar = document.getElementById("botonContinuar");
const botonFinalizar = document.getElementById("botonFinalizar");
const botonAceptar = document.getElementById("botonAceptar");
const tituloPrincipal = document.getElementById("brand");
const botonAgendarTurno = document.getElementById("buttonAgendar")
const botonConsultarTurno = document.getElementById("buttonConsultaTurno")
let mensajeFinal = document.getElementById("mensajeFinal");
let inputNombre = document.getElementById("inputNombre");
let inputTell = document.getElementById("tel");
// const imagen = document.getElementById("imagen_page_1");
const formulario1 = document.getElementById("formulario1");
const seccionPrincipal = document.getElementById("main_firstSeccion");
const seccionCalendario = document.getElementById("main_therdSection");
let checks = document.querySelectorAll(`.valores`);
let mybotonContinuar = document.getElementById("mybotonContinuar");
let menuHorarios = document.getElementsByClassName("cell");
let inputFecha = document.getElementById("dp1")
let contenedorDeHorarios = document.querySelector(".main_horarios");



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
        tween.play(); //esto están en el scriptGSAP
        tween2.play(); //esto están en el scriptGSAP
        tween3.play(); //esto están en el scriptGSAP
        tween5.play();
       turnoIdRegistrado = Math.floor(turnoIdRegistrado+1);
       // console.log(turnoIdRegistrado);
       botonConsultarTurno.style.display = "none";
       botonAgendarTurno.style.display ="none";
});

botonConsultarTurno.addEventListener("click", () => {
    swal({
        text: 'Ingrese el nombre de la película', // una vez que tenga desarrollado el server de NODE JS y pueda enviar los datos con un POST, la consulta de la fecha y el día de una turno se realizaría a través de este botón
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

$(document).ready( () => {

    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: '0d'
    });
    
$('.cell').click(function(){
        $('.cell').removeClass('select');
        $(this).addClass('select');
    });    
});

// captar en un EVENT la opción seleccionada en el select
// SESION STORAGE

botonContinuar.addEventListener("click", () => {
    // main_secondSection.style.display = "none";
    console.group("Post 1")
    console.log(turnoIdRegistrado);
    console.log(inputNombre.value);
    console.log(select.value);
    console.log(Tiempos[servicios.indexOf(select.value)]);
    console.log(select2.value);
    console.log(inputTell.value);
    console.groupEnd();
    // console.log(servicios.indexOf(select.value));
    seccionCalendario.style.display = "inline-block";
    // sessionStorage.setItem("nombre ingresado", (inputNombre.value));
    // sessionStorage.setItem("servicio seleccionado", (select.value));
    // sessionStorage.setItem("profesional seleccionado", (select2.value));
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

/* Desarrollo de botón para volver atrás al formulario y corregir algún 

mybotonContinuar.addEventListener("click", () => {
    alert("se apretó el boton volver atrás");
    tween9.reverse();
    tween6.reverse();
    tween8.reverse();
    tweenButtonAgendar.reverse();
    tweenButtonConsultaTurno.reverse();
});
*/

/*ME GUSTARÍA AGREGAR UNA API de meteorología para que el usuario seleccione la fecha y se le pueda informar si ese día va a llover o no
let clima = {
    "apiKey": "549a00d56fbe44f1a1f153830222107",
    fetchWeather: function () {
        fetch("http://api.weatherapi.com/v1/future.json?key=&q=London&dt=2022-08-24")
        .then((response) => response.json())
        .then((data) => console.log(data));     
    },
};
*/

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
    console.log(horarioSeleccionado.innerText);
    horarioSeleccionado.remove();
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
    mensajeFinalNombreCliente.className = "tituloFinal";
    mensajeFinal.append(mensajeFinalNombreCliente);

    Turnero.push(turno);
    console.log(Turnero);

    //JSON
    // localStorage.setItem("turnoIdRegistrado", turnoIdRegistrado);
    const enJSON = JSON.stringify(turno);
    localStorage.setItem("turno", enJSON);
    // localStorage.setItem("turno", turno);
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
});

//EVENTOS -Sumit

formulario1.addEventListener("submit", (event) => {
    event.preventDefault();
});


botonFinalizar.addEventListener("click", () => {
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
            // console.log(personas[i]);
        };
    };
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