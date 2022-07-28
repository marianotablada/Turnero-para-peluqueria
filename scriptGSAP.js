// trabajar con Tween todas las variables deben contener la propiedad "paused: true", sino cuando se cargue la página se va a ejecutar el comando
let tween = gsap.to(".brand", {
    duration: 1,
    marginTop: `2%`,
    delay: 0,
    fontSize: `87px`,
    paused: true
})

let tween2 = gsap.to(`.brand2`, {
    duration: 1,
    y: -15,
    x: -70,
    delay: 0,
    paused: true
});

//Opacity es para hacer esconder (aunque solo se ocula de la vista, porque sigue ocupando el mismo espacio) el elemento
let tween3 = gsap.to(`.imagen_page_1`, {
    duration: 0.5, 
    //x: 100, 
    y: -50, 
    opacity: 0,
    height: 0,
    paused: true
    
});

let tweenButtonAgendar = gsap.to(`#buttonAgendar`, {
    duration: 0,  
    opacity: 0,
    delay: 0,
    paused: true
});

let tweenButtonConsultaTurno = gsap.to(`#buttonConsultaTurno`, {
    duration: 0,  
    opacity: 0,
    delay: 0,
    paused: true
});

//autoAlpha hace que aparezca el elemento. Es importante verificar aquí que el elemento en el CSS tenga la propiedad "visibility: hidden,"
let tween5 = gsap.to(`#formulario1`, {
    duration: 2, 
    autoAlpha: 1,
    delay: 0.5, 
    paused: true
});

let tween8 = gsap.to(`.bn633-hover`, { //botón Continuar 
    duration: 1,
    autoAlpha: 1,
    delay: 0.5,
    paused: true
});

let tween9 = gsap.to(`.bn634-hover`, { //botón Aceptar
    duration: 1, 
    autoAlpha: 1,
    delay: 1, 
    paused: true
});