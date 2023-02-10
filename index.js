let doc = document.getElementById("root");
let cards=[];

let url = prompt ('Ingrese id Url gdrive');
//Aqui realizar el for en busqueda de d/ y /v obtener sus ubicaciones y cortar el id de la imagen con substring
let card = document.createElement('article');
let tittle = document.createElement('h4');
let image = document.createElement('img');
image.src=`https://drive.google.com/uc?export=view&id=${url}`;
tittle.innerHTML="Titulo del card"
card.appendChild(tittle);
card.appendChild(image);
// Crear nodos de texto para un elemento

 doc.appendChild(card)