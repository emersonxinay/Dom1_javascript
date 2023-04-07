let cuerpo = document.body;
cuerpo.classList.add("bg-dark")



let contenedor = document.querySelector("#contenedor");

let subtitulo = document.createElement("h3");
subtitulo.innerText = "Árbol de nodos";
subtitulo.classList.add("text-white")

let imagen = document.createElement("img");
imagen.src =
  "http://dis.um.es/~lopezquesada/documentos/IES_1314/IAW/curso/UT7/libroswebjavascript/www.librosweb.es/img/javascript/f0401.gif";
imagen.width = "300";
imagen.alt = "árbol de nodos";

// contenedor.appendChild(subtitulo);
// contenedor.appendChild(imagen);

contenedor.append(subtitulo, imagen);

const autor = {
  nombre: "Emerson Espinza",
  usuario: "@emer",
  correo: "emer@gmail.com",
  descriptcion:
    "No dejes de programar y se parte de los que cambiaran el mundo con tecnología",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVzcOZEqLQk9Ma142okaHnitwOAvlaCgTw&usqp=CAU",
};

const crearTarjeta = () => {
  document.querySelector("#contenedor_tarjeta").innerHTML = "";

  let columnaTarjeta = document.createElement("div");
  columnaTarjeta.className = "col";

  let tarjetaAutor = `
  <div class="col-12 col-md-5 offset-md-1">
  <div class="card " style="width: 18rem">
  <img
    src="${autor.imagen}"
    class="card-img-top pt-2"
    alt="${autor.nombre}"
  />
  <div class="card-body">
    <h5 class="card-title">${autor.nombre}</h5>
    <p class="card-text">
      ${autor.descriptcion}
    </p>
    <p class="text-muted">
  ${autor.correo}
    </p>
    <button class="btn btn-primary" onclick="eventoClick(event)">Ver perfil</button>
  </div>
  </div>
  </div>`;

  columnaTarjeta.innerHTML = tarjetaAutor;
  document.querySelector("#contenedor_tarjeta").append(columnaTarjeta);
};

const modificarAutor = (event) => {
  console.log(event);
  event.preventDefault();

  autor.nombre = document.querySelector("#nombre").value;
  autor.usuario = document.querySelector("#usuario").value;
  autor.correo = document.querySelector("#email").value;

  crearTarjeta();
  limpiarFormulario();
};

// const eventoClick = (event) => {
//   console.log(event);
// };
const limpiarFormulario = () => {
  document.getElementById("formulario").reset();
};

document
  .getElementById("formulario")
  .addEventListener("submit", modificarAutor);

crearTarjeta();