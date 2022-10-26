
 const tablaCarrito= document.getElementById("tablaCarrito");
 const cardTotal=document.getElementById("cardTotal");

function renderJuegoCarritoHTML(listaJuegoCarrito){
    
    const tbody = document.createElement("tbody");

    tbody.innerHTML+=`
    <tr class="juegoEnCarritoContenedor">
        <td> <img src="${listaJuegoCarrito.imagen}" class="imgJuegoCarrito" alt="${listaJuegoCarrito.nombreJuego}" width="100px"></td>
        <td><h3 class="nombreJuegoCarrito">${listaJuegoCarrito.nombreJuego}</h3></td>
        <td><h5 class="precioCarrito">ARS$${(listaJuegoCarrito.precio)}</h5></td>
        <td>
            <input id="btnResta${listaJuegoCarrito.id}" class="btnRe" type="button" value="-">

            <h5 class="cantidadCarrito" id="cantidadCarritoTabla">${listaJuegoCarrito.cantidad}</h5>

            <input id="btnSuma${listaJuegoCarrito.id}" class="btnSu" value="+" type="button">
        </td>

        <td><h5 class="subTotalCarrito">ARS$${(listaJuegoCarrito.precio * listaJuegoCarrito.cantidad).toFixed(2)}</h5></td>
        <td>"Eliminar"</td>
    <tr>`

    tablaCarrito.appendChild(tbody);

    const btnRestaCantidad= document.getElementById(`btnResta${listaJuegoCarrito.id}`);
    btnRestaCantidad.addEventListener("click",()=>{
        resta(listaJuegoCarrito.id)
     
        
    })
    const btnSumaCantidad= document.getElementById(`btnSuma${listaJuegoCarrito.id}`);
    btnSumaCantidad.addEventListener("click",()=>{
        suma(listaJuegoCarrito.id);
        
        
           
    })

}


function suma(id){

    const juegoEnCarrito= carrito.find((juego)=> juego.id === id);

    if(juegoEnCarrito.cantidad){
        juegoEnCarrito.cantidad++;
        console.log(`se agrego otro ${juegoEnCarrito.nombreJuego} al Carrito!`);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        MostrarProductoEnCarrito(); 
        
        
    }
}

function resta(id){

    const juegoEnCarrito= carrito.find((juego)=> juego.id === id);
    
    if(juegoEnCarrito.cantidad){
        
        juegoEnCarrito.cantidad--;
        
        
        localStorage.setItem("carrito",JSON.stringify(carrito));
        MostrarProductoEnCarrito();
          
    }else{

        juegoEnCarrito.cantidad--;
        
        localStorage.setItem("carrito",JSON.stringify(carrito));
        MostrarProductoEnCarrito();
        
        
    
    }
}

function MostrarProductoEnCarrito(){
    //Esta funcion permite capturar los juegos añadidos al localStorage y mostrarlos en carrit.html.
    tablaCarrito.innerHTML='';
    

    if(localStorage.getItem("carrito"))
    carrito.forEach((juego)=>{
        renderJuegoCarritoHTML(juego);

        
    })

    MostrarCardTotal();
    
   
}



function renderCardCarritoTotal(){

    const divTotal=document.createElement("div");

    divTotal.innerHTML=`
      <h2>Total Carrito</h2>
      <table>
            <tbody>
            <tr>
                <th>Subtotal</th>
                <td>
                <span>ARS$${(SubtotalPrecioCarrito())}</span>
                </td>
            </tr>
            <tr>
                <th>Envio</th>
                <td>
                <label for="CheckBoxEnvio"><span>ARS$${300}</span></label>
                <input type="checkbox" name="CheckBoxEnvio">
                </td>
            </tr>
            <tr>
                <th>TOTAL</th>
                <td>
                <span>${(SubtotalPrecioCarrito()+300)}</span>
                </td>
            </tr>
            </tbody>
      </table>
    `
    cardTotal.appendChild(divTotal);
}

function MostrarCardTotal(){
    //Esta funcion permite capturar los juegos añadidos al localStorage y mostrarlos en carrit.html.
    
    cardTotal.innerHTML='';

    if(localStorage.getItem("carrito")){
        renderCardCarritoTotal();

    }
    

        
}
    
    
    
   




LimpiarCarritoBtnClick();
MostrarProductoEnCarrito();
















