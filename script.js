// ANIMAR OBJETOS
// ANIMAR PRIMER CARD DE PROCESOS - MOVIMIENTO DE DERECHA A IZQUIERDA AL SCROLEAR

window.addEventListener('scroll', function(){
    // SELECCION DEL OBJETO QUE SE VA A ANIMAR
    let cardAnimar = document.getElementById('cardProcesos1');

    // SELECCIONAR LA POSICION DEL OBJETO CON RESPECTO A LA PANTALLA
    let posicionoBJ1 = cardAnimar.getBoundingClientRect().top;
    console.log(posicionoBJ1)

    let tamanoPantalla = window.innerHeight/3.5;

    if (posicionoBJ1 < tamanoPantalla) {
            cardAnimar.style.animation = `mover 2s ease-out`
    }
})

// FUNCION PARA BOTON DE IR ARRIBA

function irArriba(){
    window.addEventListener('scroll',()=>{
        let scrool = document.documentElement.scrollTop;
        console.log(scrool)

        // HACER VISIBE O INVISIBLE EL BOTON AL HACER SCROOL
        let irArriba = document.getElementById('btn-arriba-link')
        if (scrool > 1100 ) {
            irArriba.style.visibility = "visible"
        }
        else{
            irArriba.style.visibility = "hidden"
        }
    })
}
// EJECUTAR LA FUNCION
irArriba();