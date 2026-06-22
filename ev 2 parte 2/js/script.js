let modo = "novela";

function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let contenido = document.getElementById("contenido").value;
    let genero = document.getElementById("genero").value;

    if (nombre === "" || contenido === "" || genero === "") {
        alert("Completa los campos");
        return;
    }

    if (!document.getElementById("check1").checked || !document.getElementById("check2").checked) {
        alert("Marca las opciones");
        return;
    }

    alert("Registro listo");
}


function validarFechas() {

    let inicio = document.getElementById("inicio").value;
    let fin = document.getElementById("fin").value;

    if (inicio === "" || fin === "") {
        alert("Ingresa fechas");
        return;
    }

    if (inicio > fin) {
        alert("Fecha incorrecta");
    } else {
        alert("Fechas correctas");
    }
}



function cambiarModo() {

    let body = document.getElementById("body");
    let form = document.querySelector(".formulario");
    let titulo = document.getElementById("titulo");
    let labelContenido = document.getElementById("labelContenido");
    let labelCheck1 = document.getElementById("labelCheck1");

    if (modo === "novela") {
        modo = "anime";
    } else if (modo === "anime") {
        modo = "manga";
    } else if (modo === "manga") {
        modo = "manwha";
    } else {
        modo = "novela";
    }

    body.className = modo + "-mode";
    form.className = "mx-auto p-4 formulario " + modo + "-form";

    if (modo === "anime") {
        titulo.innerText = "Registro de Anime";
        labelContenido.innerText = "Nombre del anime";
        labelCheck1.innerText = "He visto este anime";
    }

    else if (modo === "manga") {
        titulo.innerText = "Registro de Manga";
        labelContenido.innerText = "Nombre del manga";
        labelCheck1.innerText = "He leído este manga";
    }

    else if (modo === "manwha") {
        titulo.innerText = "Registro de Manwha";
        labelContenido.innerText = "Nombre del manwha";
        labelCheck1.innerText = "He leído este manwha";
    }

    else {
        titulo.innerText = "Registro de Novelas";
        labelContenido.innerText = "Nombre de la novela";
        labelCheck1.innerText = "He leído esta novela";
    }
}


