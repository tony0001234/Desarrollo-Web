let variable = "contenido";
const variable2 = "contenido2";

console.log("Hola mundo", variable, variable2);

let texto = document.getElementById("contenido");
console.log(texto);

let etiqueta = document.getElementsByTagName("div");
console.log(etiqueta);

for (let i = 0; i < etiqueta.length; i++) {
    etiqueta[i].style.backgroundColor = "red";
    etiqueta[i].style.color = "white";
    etiqueta[i].style.padding = "10px";
    console.log(etiqueta[i]);
}