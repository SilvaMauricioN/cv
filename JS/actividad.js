let ElegirAcerca = document.getElementById("Elegir-Acerca");
let ElegirResumen = document.getElementById("Elegir-Resumen");
let ElegirContacto = document.getElementById("Elegir-Contacto");
let ElegirAptitud = document.getElementById("Elegir-Aptitud");
let ElegirTrabajos = document.getElementById("Elegir-Trabajos");



// Sections
let Acerca = document.getElementById("Acerca");
let Resumen = document.getElementById("Resumen");
let Contacto = document.getElementById("Contacto");
let Aptitud = document.getElementById("Aptitud");
let Trabajos = document.getElementById("Trabajos");



function removeClass() {
    // Links
    ElegirAcerca.classList.remove('elegido');
    ElegirResumen.classList.remove('elegido');
    ElegirContacto.classList.remove('elegido');
    ElegirAptitud.classList.remove('elegido');
    ElegirTrabajos.classList.remove('elegido');


    // Sections
    Acerca.classList.remove('vista');
    Resumen.classList.remove('vista');
    Contacto.classList.remove('vista');
    Aptitud.classList.remove('vista');
    Trabajos.classList.remove('vista');
}


ElegirAcerca.addEventListener('click', function () {
    if (window.innerWidth > 880) 
    {
        removeClass();
        Acerca.classList.add('vista');
        ElegirAcerca.classList.add('elegido');
    }

});
ElegirResumen.addEventListener('click', function () {
    if (window.innerWidth > 880)
    {
        removeClass();
        Resumen.classList.add('vista');
        ElegirResumen.classList.add('elegido');
    }
})
ElegirContacto.addEventListener('click', function () {
    if (window.innerWidth > 880)
     {
        removeClass();
        Contacto.classList.add('vista');
        ElegirContacto.classList.add('elegido');
    }
})


ElegirTrabajos.addEventListener('click', function () {
    if (window.innerWidth > 880)
    {
        removeClass();
        Trabajos.classList.add('vista');
        ElegirTrabajos.classList.add('elegido');
    }
})

ElegirAptitud.addEventListener('click', function () {
    if (window.innerWidth > 880)
    {
        removeClass();
        Aptitud.classList.add('vista');
        ElegirAptitud.classList.add('elegido');
    }
})
