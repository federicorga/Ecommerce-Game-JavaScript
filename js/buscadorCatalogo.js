const catalogoContenedor= document.getElementById("catalogoContenedor");


function renderJuegoHTML(game)
{
	const card = document.createElement("div");
	card.innerHTML+=`
	<div class="card tarjeta">
	<img src=${game.imagen} class="card-img-top imgCard" id="${game.nombreJuego}" type="button" alt=${game.nombreJuego}>
		<div class="card-body informacionTarjeta">
			<h2 class="card-title">${game.nombreJuego}</h2>
			<h4 class="card-title">Plataforma: ${game.plataforma}</h4>
			<h4 class="card-title">Genero: ${game.genero}</h4>
			<h4 class="card-title">Idioma: ${game.idioma}</h4>
			<h4 class="card-title">Tamaño: ${game.tamano}</h4>
			<h5 class="card-title precioCard">ARS$${game.precio}</h5>
		<button class="btn btnAgregar" id="btnAgregarCarro${game.id}">Agregar al carrito <div class="iconBtnCarrito"><div/></button>    
		</div> 
	</div>`

	catalogoContenedor.appendChild(card);

	const btnAgregarCarro = document.getElementById(`btnAgregarCarro${game.id}`);

	btnAgregarCarro.addEventListener("click",()=>{
		agregarAlCarrito(game.id);
	})
}




function MostrarCatalogo(catalogoContenedor,propiedadObjeto,textoBuscador=""){

    catalogoContenedor.innerHTML= ''; //actualizo el Catalogo

    
    const TextoMin=textoBuscador.toLowerCase();
    console.log(TextoMin);
    
    listaJuegos.forEach((listaGame)=> {

    const nombreJuego= `${listaGame[`${propiedadObjeto}`]}`;
    
     
      const nombreJuegoMinuscula= nombreJuego.toLowerCase();

      if(nombreJuegoMinuscula.indexOf(TextoMin)!== -1){
       
            renderJuegoHTML(listaGame);
      
        }
    })
    
    if(catalogoContenedor.innerHTML=== ''){
        catalogoContenedor.innerHTML=`
        <div class="notFoundGame">
            <h2>No se han encontrado resultados</h2>
            <img src="img/mario.gif" style="width: 5rem" alt="...">
            <img src="img/404error.webp" alt="">
        </div>`
    }
}



function BusquedaDeJuego(){ //Me permite filtrar en la barra de busqueda al vincularlo, tambien sirve para mostrar todo el catalogo.
    const barraBuscador= document.getElementById("barraBuscador");
    const textoBuscador = barraBuscador.value;
    MostrarCatalogo(catalogoContenedor,"nombreJuego",textoBuscador)
    barraBuscador.addEventListener('keyup', BusquedaDeJuego); //filtra letra por letra
}



//---------------------------------------------------------------------SECCION FILTROS





//-------------------------------------------------------SECCION CARRITO








//Ejecutar

BusquedaDeJuego(); //Muestra en index.html el catalogo y activa la barra de busqueda.
mostrarValorCarritoIcon();






