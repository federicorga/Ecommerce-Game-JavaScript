
function CargarDatosJsonEnListaJuegos(datos){
  datos.forEach((juego) => {
    listaJuegos.push(juego);
    //permite agregar los datos del catalogoJuegos.json a la lista de juegos.
  });
}

function mostrarListaObjetosenSeccionHTML(sectionID, lista, propiedaObjeto) {
  //esta funcion permite devolver una lista array de objetos desplegable dentro de un Section del HTML.
  //se debe especificar la lista y la propiedad del objeto que desea mostrar.
  const elementoId = document.getElementById(`${sectionID}`); //se envia el parametro con "" como string.
  elementoId.innerHTML = "";
  for (const listagenerada of lista) {
    //lista es el array que deseo usar.
    elementoId.innerHTML += `
        <li value="${listagenerada[`${propiedaObjeto}`]}">
            <button class="filtro${listagenerada[`${propiedaObjeto}`]}
                "id="filtro${listagenerada[`${propiedaObjeto}`]}">${listagenerada[`${propiedaObjeto}`]
      }
            </button>
        </li>
    `;

    //propiedadObjeto se envia con "" se puede enviar cualquier propiedad de un objeto.
    //listagenerada es un array de objetos.
  }
}

const agregarAlCarrito = (id) => {
  const productoJuego = listaJuegos.find((juego) => juego.id === id);
  const juegoEnCarrito = carrito.find((juego) => juego.id === id);
  if (juegoEnCarrito) {
    juegoEnCarrito.cantidad++;
    console.log(`se agrego otro ${juegoEnCarrito.nombreJuego} al Carrito!`);
  } else {
    carrito.push(productoJuego);
    console.log(`Se agrego ${productoJuego.nombreJuego} al Carrito!`);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarValorCarritoIcon();
  SubtotalPrecioCarrito();
};

function mostrarValorCarritoIcon() {
  carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Verifica si el carrito esta vacio o no.
  console.log("Productos en Carrito:");
  console.log(carrito);
  actualizarValorCarrito();
}

function actualizarValorCarrito() {
  const iconNumCarrito = document.getElementById("iconNumCarrito");
  iconNumCarrito.innerText = carrito.length; //Actualiza el valor del icono del carrito del header
}

const eliminarTodoElCarrito = () => {
  carrito = [];
  localStorage.clear();
  actualizarValorCarrito();
};

const eliminarObjetoDeCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(`Se elimino Juego: ${producto.nombreJuego} del Carrito.`);
};

function SubtotalPrecioCarrito() {
  let CompraTotal = 0;
  carrito.forEach((juego) => {
    CompraTotal += juego.precio * juego.cantidad;
  });
  return CompraTotal;
}

function totalPrecioCarritos() {
  const valor = SubtotalPrecioCarrito();
  if (checkBoxEnvio.checked === true) {
    return valor + 300;
  } else {
    return valor;
  }
}

function LimpiarCarritoBtnClick() {
  const limpiarCarrito = document.getElementById("limpiarCarrito");

  limpiarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    MostrarProductoEnCarrito();
    console.log("Se limpio el Carrito!");
  });
}

function getPrecioTotal() {
  let precioDeCompra = JSON.parse(localStorage.getItem("precioDeCompra"));

  return precioDeCompra;
}

function maximoId() {
  //Devuelve el Numero ID Maximo de la lista juegos;

  let maximoId = 0;
  const listaDeIds = [];
  if (listaJuegos.length === 0) {
    maximoId = 0;
  } else {
    listaJuegos.forEach((element) => {
      const id = element.id;
      listaDeIds.push(id);
    });
    maximoId = Math.max(...listaDeIds); //con los (...) puedo sacar el maximo de un array de numeros.
  }
  return maximoId;
}

