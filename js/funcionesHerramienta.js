


function mostrarListaObjetosenSeccionHTML(sectionID, lista, propiedaObjeto) {
    //esta funcion permite devolver una lista array de objetos desplegable dentro de un Section del HTML.
    //se debe especificar la lista y la propiedad del objeto que desea mostrar.
    const elementoId = document.getElementById(`${sectionID}`); //se envia el parametro con "" como string.
    elementoId.innerHTML = '';
    for(const listagenerada of lista){ //lista es el array que deseo usar.
      elementoId.innerHTML +=`
      <li value="${listagenerada[`${propiedaObjeto}`]}"><button class="filtro${listagenerada[`${propiedaObjeto}`]}" id="filtro${listagenerada[`${propiedaObjeto}`]}">${listagenerada[`${propiedaObjeto}`]}</button></li>`
      
      //propiedadObjeto se envia con "" se puede enviar cualquier propiedad de un objeto.
      //listagenerada es un array de objetos.

    }
    
  };

  const agregarAlCarrito= (id)=>{

    const productoJuego= listaJuegos.find((juego) => juego.id === id);
    const juegoEnCarrito= carrito.find((juego)=> juego.id === id);
    if(juegoEnCarrito){
        juegoEnCarrito.cantidad++;
        console.log(`se agrego otro ${juegoEnCarrito.nombreJuego} al Carrito!`);
    }
    else{
        carrito.push(productoJuego);
        
        console.log(`Se agrego ${productoJuego.nombreJuego} al Carrito!`);
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));
    mostrarValorCarritoIcon();
    totalPrecioCarrito();
}

function mostrarValorCarritoIcon(){

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
    
  }
  actualizarValorCarrito();
}



function actualizarValorCarrito(){

const iconNumCarrito = document.getElementById("iconNumCarrito");
iconNumCarrito.innerText= carrito.length; //Actualiza el valor del icono del carrito del header
}

const eliminarTodoElCarrito = () => {
    //LocalStorage.
    carrito=[];
    localStorage.clear();
    actualizarValorCarrito();   
}


function SubtotalPrecioCarrito(){

    let CompraTotal = 0;
    carrito.forEach((juego)=>{ 
        CompraTotal+= juego.precio*juego.cantidad;
      
    });
    // totalCarrito.innerHTML= `Total: $${CompraTotal}`;
    console.log("Precio Total: $" + CompraTotal);
    return CompraTotal;

}



function LimpiarCarritoBtnClick(){

    const limpiarCarrito= document.getElementById("limpiarCarrito");

    limpiarCarrito.addEventListener("click",()=>{
        eliminarTodoElCarrito();
        MostrarProductoEnCarrito();
    })
    
    }


   mostrarValorCarritoIcon();