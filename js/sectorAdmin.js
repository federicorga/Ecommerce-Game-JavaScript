
const formGeneradorJuego= document.getElementById("formGeneradorJuego"); //Capturo el formulario

formGeneradorJuego.addEventListener("submit", (e)=>{
  e.preventDefault(); //Evito actualizacion de paginas
  agregarJuego(); //Agrego Juego
  CatalogoAdmin(); //actualizo catalogo
  formGeneradorJuego.reset(); //reseteo formulario
});

function agregarJuego(){
  const id= maximoId()+ 1;
  const nombreJuego= document.getElementById("nombreJuego").value;
  const plataforma= document.getElementById("plataforma").value;
  const idioma= document.getElementById("idioma").value;
  const genero = document.getElementById("genero").value;
  const tamano = Number(document.getElementById("tamano").value);
  const precio = Number(document.getElementById("precio").value);
  const imagen = document.getElementById("imagen").value;
  const descripcion = document.getElementById("descripcion").value;

  const juego = new Juego(id, nombreJuego, plataforma, idioma, genero, tamano, precio, `img/juegos/${imagen}.png`, descripcion);

  listaJuegos.push(juego);

  console.log("Se agrego: " + juego.nombreJuego + " " + "a la lista de forma exitosa!.");
  console.log(listaJuegos);

}
function mostrarListaObjetosenSeccionHTML(sectionID, lista, propiedaObjeto) {
  //esta funcion permite devolver una lista array de objetos desplegable dentro de un Section del HTML.
  //se debe especificar la lista y la propiedad del objeto que desea mostrar.
  const elementoId = document.getElementById(`${sectionID}`); //se envia el parametro con "" como string.
  elementoId.innerHTML = '';
  for(const listagenerada of lista){ //lista es el array que deseo usar.
    elementoId.innerHTML +=`
    <option value="${listagenerada[`${propiedaObjeto}`]}">${listagenerada[`${propiedaObjeto}`]}</option>`
    //propiedadObjeto se envia con "" se puede enviar cualquier propiedad de un objeto.
    //listagenerada es un array de objetos
  }
}
mostrarListaObjetosenSeccionHTML( "genero" ,listaGeneros, "nombreGenero");
mostrarListaObjetosenSeccionHTML("idioma", listaIdiomas, "idioma");
mostrarListaObjetosenSeccionHTML("plataforma", listaPlataformas, "nombrePlataforma");

//---------------------------------CATALOGO ADMIN-------------------------------

const catalogoContenedorAdmin = document.getElementById("catalogoContenedorAdmin");
const barraBuscadorAdmin= document.getElementById("barraBuscadorAdmin");

const CatalogoAdmin=()=>{ //Me permite filtrar en la barra de busqueda al vincularlo, tambien sirve para mostrar todo el catalogo.

    catalogoContenedorAdmin.innerHTML= ''; //con esto limpiamos el catalogo antes de la busqueda
    const textoBuscador = barraBuscadorAdmin.value.toLowerCase();
    listaJuegos.forEach((listaGame)=> {
      const card = document.createElement("div");
      const nombreJuegoMinuscula= listaGame.nombreJuego.toLowerCase();
      if(nombreJuegoMinuscula.indexOf(textoBuscador)!== -1){
          card.innerHTML+=`
          <div class="card tarjeta">
          <img src=${listaGame.imagen} class="card-img-top imgCard" type="button" alt=${listaGame.nombreJuego}>
              <div class="card-body informacionTarjeta" data-id=${listaGame.id}>
                  <h2 class="card-title">${listaGame.nombreJuego}</h2>
                  <h4 class="card-title">Plataforma: ${listaGame.plataforma}</h5>
                  <h4 class="card-title">Genero: ${listaGame.genero}</h5>
                  <h4 class="card-title">Idioma: ${listaGame.idioma}</h5>
                  <h4 class="card-title">Tamaño: ${listaGame.tamano}</h5>
                  <h5 class="card-title precioCard">ARS$${listaGame.precio}</h4>
                  <button class="btn btn-primary botonPrinciapl" id="btnEditarJuego${listaGame.id}">Editar</button>
                  <button class="btn btn-primary botonPrincipal" id="btnEliminarJuego${listaGame.id}">Eliminar</button>        
              </div>
          </div>`
          catalogoContenedorAdmin.appendChild(card);
          const btnEliminars = document.getElementById(`btnEliminarJuego${listaGame.id}`);
          btnEliminars.addEventListener("click", () => {
            
            eliminarObjetoDeArray(listaGame.id,listaJuegos);
            CatalogoAdmin();
          })
        
        };

    })
    if(catalogoContenedorAdmin.innerHTML=== ''){
        catalogoContenedorAdmin.innerHTML=`
        <div class="notFoundGame">
            <h2>No se han encontrado resultados</h2>
            <img src="img/mario.gif" style="width: 5rem" alt="...">
            <img src="img/404error.webp" alt="">
        </div>`
    }

}

barraBuscadorAdmin.addEventListener('keyup', CatalogoAdmin); //filtra letra por letra

CatalogoAdmin(); //Ejecuto el catalogo en Sector Admin