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


const turnero = []
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
// const imagen = document.getElementById("imagen_page_1");
const formulario1 = document.getElementById("formulario1");
const seccionPrincipal = document.getElementById("main_firstSeccion");
const seccionCalendario = document.getElementById("main_therdSection");
let checks = document.querySelectorAll(`.valores`);
let myBtn = document.getElementById("myBtn");
let menuHorarios = document.getElementsByClassName("cell");

/*
console.log(menuHorarios[0].innerText);

menuHorarios.addEventListener("click", () => {
    console.log(menuHorarios.indexOf);
    let resultadoHorarioSeleccionado = menuHorarios[indexOf];
    console.log(resultadoHorarioSeleccionado);
});

menuHorarios.addEventListener("click", () => {
    tween9.play();
});
*/

function chequearFormularioEnviado (){
    const formularioEnviado = localStorage.getItem("turnoRegistrado");
    // swal("Bienvenido/a !");
    if (formularioEnviado !== null){
        console.log("SI se registró ningún turno desde este dispositivo");
        // tween6.play();    
    }else{
        console.log("Aún NO se registró ningún turno desde este dispositivo");
        botonConsultarTurno.style.display = "none";
    }
}
chequearFormularioEnviado ();

//EVENTOS

botonAgendarTurno.addEventListener("click", () =>  {
        // botonAgendarTurno.style.visibility = "hidden";
        tweenButtonAgendar.play();
        tweenButtonConsultaTurno.play();
        seccionPrincipal.style.height = 240 + `px`;
        tween.play(); //esto están en el scriptGSAP
        tween2.play(); //esto están en el scriptGSAP
        tween3.play(); //esto están en el scriptGSAP
        tween5.play();
       // botonConsultarTurno.style.visibility = "hidden";
});

botonConsultarTurno.addEventListener("click", () => {
    swal({
        text: 'Ingrese el número de su turno',
        content: "input", // cero que aquí debería ir number
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
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
});

inputNombre.addEventListener("change", () => {
    tween8.play();
});

/*Opción 2-
    botonAgendarTurno.onclikn = () => {
    alert("Se hizo click sobre el boton Agendar Turno");
}
*/

// let horarioSeleccionado = document.querySelector(".cell py-1 select");
// 

// captar en un EVENT la opción seleccionada en el select
// SESION STORAGE

botonContinuar.addEventListener("click", () => {
    // main_secondSection.style.display = "none";
    console.log(inputNombre.value);
    console.log(select.value);
    console.log(servicios.indexOf(select.value));
    console.log(Tiempos[servicios.indexOf(select.value)]);
    console.log(select2.value);
    // formulario1.style.visibility = "hidden";
    seccionCalendario.style.display = "inline-block";
    sessionStorage.setItem("nombre ingresado", (inputNombre.value));
    sessionStorage.setItem("servicio seleccionado", (select.value));
    sessionStorage.setItem("profesional seleccionado", (select2.value));
});



botonContinuar.addEventListener("click",function(){
    checks.forEach((e) => {
        if(e.checked == true){
            console.log(e.value); 
            swal(`Te vamos a esperar con un rico ${e.value} !`);
        };
    });
});

/* Desarrollo de botón para volver atrás al formulario y corregir algún 

myBtn.addEventListener("click", () => {
    alert("se apretó el boton volver atrás");
    tween9.reverse();
    tween6.reverse();
    tween8.reverse();
    tweenButtonAgendar.reverse();
    tweenButtonConsultaTurno.reverse();
});
*/

let inputFecha = document.getElementById("dp1")


botonAceptar.addEventListener("click", () => {

    let horarioSeleccionado = document.querySelector(".cell.select");
    
    console.log(horarioSeleccionado.innerText);


    const turno = {
        nombre: inputNombre.value,
        motivo: select.value,
        día: inputFecha.value,
        hora: horarioSeleccionado.innerText,
        profesional: select2.value,
        tiempo: Tiempos[servicios.indexOf(select.value)],
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

    turnero.push(turno);
    
    console.log(turnero);
    // myBtn.style.display = "none";


localStorage.setItem("turnoRegistrado", parseInt(Math.random()));

    //JSON
    /*
    const enJSON = JSON.stringify(turno);
    localStorage.setItem("turno", enJSON);
    
    // localStorage.setItem("turno", turno);
    */
    seccionCalendario.style.display = "none";

    swal({
        title: `Muchas gracias ${inputNombre.value}!`,
        text: `Se registró tu turno CORRECTAMENTE`,
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
        const turnosFiltrados = turnero.filter((turno) => {
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

/* + de sesionStorage
for (let i = 0; i < sessionStorage.length; i++){
    const clave = sessionStorage.key (i);
    const valor = sessionStorage.getItem(clave);
    console.log(`Para la clave: ${clave}, el valor es: ${valor} `);
}
});
*/

// Local Storage 
// localStorage.removeItem("turnos");
// localStorage.clear();
