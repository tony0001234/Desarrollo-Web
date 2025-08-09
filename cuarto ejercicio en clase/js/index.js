let parrafo = document.getElementById("parrafo");
console.log(parrafo);
/*
parrafo.style.color = "blue";
parrafo.style.fontSize = "20px";
parrafo.style.fontWeight = "bold";
parrafo.style.textAlign = "center";
*/
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
/*
parrafos[0].style.color = "red";
parrafos[0].style.fontSize = "25px";
parrafos[0].style.fontWeight = "bold";
parrafos[0].style.textAlign = "center";
*/
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red";
    parrafos[i].style.fontSize = "30px";
    parrafos[i].style.fontWeight = "normal";
    parrafos[i].style.textAlign = "center";
    parrafos[i].style.background = "yellow";
}

let classContenido = document.getElementsByClassName("contenido");
console.log(classContenido);

for (let i = 0; i < classContenido.length; i++) {
    classContenido[i].style.color = "green";
    classContenido[i].style.textAlign = "center";
    classContenido[i].style.background = "lightblue";
}

let otroParrafo = document.querySelector("div p");
console.log(otroParrafo);
/*otroParrafo.style.display = "none";*/
otroParrafo.style.color = "purple";
otroParrafo.style.fontSize = "18px";
otroParrafo.style.fontWeight = "bold";
otroParrafo.style.textAlign = "left";
otroParrafo.style.background = "lightgray";

let texto = otroParrafo.innerText;
let texto2 = otroParrafo.textContent;
console.log(texto2);
console.log(texto);
otroParrafo.innerText = "Texto modificado desde JavaScript";
/*
otroParrafo.innerHTML = "<h1>Insercion de un H1 desde javascript</h1>";*/
otroParrafo.outerHTML = "<h1>Insercion de un H1 desde javascript</h1>";
/*
let otroParrafo2 = document.querySelector("#parrafo");
console.log(otroParrafo2);
otroParrafo2.style.color = "orange";
otroParrafo2.style.fontSize = "22px";
otroParrafo2.style.fontWeight = "normal";
otroParrafo2.style.textAlign = "right";*/

let otroParrafo3 = document.querySelectorAll("div p");
console.log(otroParrafo3);
for (let i = 0; i < otroParrafo3.length; i++) {
    otroParrafo3[i].style.color = "blue";
    otroParrafo3[i].style.fontSize = "60px";
    otroParrafo3[i].style.fontWeight = "bold";
    otroParrafo3[i].style.textAlign = "center";
    otroParrafo3[i].style.background = "lightgreen";
}

let botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener("click", function() {
    console.log("Botón eliminar presionado");
    let div = document.querySelector("div");
    /*div.classList.add("eliminar");*/
    /*div.classList.remove("eliminar");*/
    div.classList.toggle("eliminar");
    console.log("Div ocultado");
    /*if (div) {
        div.remove();
        console.log("Div eliminado");
    } else {
        console.log("No se encontró el div para eliminar");
    }*/
});

