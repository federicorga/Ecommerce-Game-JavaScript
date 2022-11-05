const tablaCompra= document.getElementById("tablaCompra");
const totalPrecioCompra =document.getElementById("totalPrecioCompra");




function renderJuegoCompradoHTML(listaJuegoCarrito){
    
    const tbody = document.createElement("tr");
    tbody.classList.add("compraConfirmada");

    tbody.innerHTML+=`
        <td> <img src="${listaJuegoCarrito.imagen}" class="imgJuegoCarrito" alt="${listaJuegoCarrito.nombreJuego}" width="49px"></td>
        <td><h3 class="nombreJuegoCarrito">${listaJuegoCarrito.nombreJuego}</h3></td>
        <td><h5 class="precioCarrito">$${(listaJuegoCarrito.precio)}</h5></td>
        <td>
            <h5 class="cantidadCarrito" id="cantidadCarritoTabla">${listaJuegoCarrito.cantidad}</h5>
        </td>
        <td><h5 class="subTotalCarrito">$${(listaJuegoCarrito.precio * listaJuegoCarrito.cantidad).toFixed(2)}</h5></td>
        <div class=">
    `

    tablaCompra.appendChild(tbody);


}


function MostrarProductoComprados(){
    //Esta funcion permite capturar los juegos añadidos al localStorage y 
    //mostrarlos
    tablaCompra.innerHTML='';
    
    if(localStorage.getItem("carrito"))
    carrito.forEach((juego)=>{
        renderJuegoCompradoHTML(juego);

    })
    
}


function renderTotalCompraHTML(){

    const divTotal=document.createElement("div");

    divTotal.classList.add("boxCardTotalOrden");
    divTotal.innerHTML=`
      <h2 class="tituloOrden">SU ORDEN</h2>
      <table class="tableTotalCar">
            <tbody class="tbodyTotalCar">
           
            <tr class="trTotalCar">
                <th>TOTAL</th>
                <td>
                <span class="precioTotal" id="spaneando">ARS$${getPrecioTotal()}</span>
                </td>
            </tr>
            </tbody>
      </table>

    
      
<form>

<section class=seccionDatos>
<h2 class="TituloTotalCarrito">DATOS PERSONALES</h2>
    <label for="nombyapeC">Nombre y Apellido</label>
    <input class="form-control" type="text" name="" id="nombyapeC">
    <label for="">Email</label>
    <input class="form-control" type="email" name="" id="emailC">
    <label for="">Telefono</label>
    <input class="form-control" type="tel" name="" id="telefonoC">
    <label for="">Dirección</label>
    <input class="form-control" type="text" name="" id="direccionC">
</section>

<h2 class="TituloTotalCarrito">DATOS DE TARJETA</h2>
      <section>
          <section class="contenedorTarjeta">
                <div class="cred">
                    <div class="face front">
                        <h3 class="debit">Tarjeta de Credito</h3>
                        <h3 class="bank"><input class="textBoxCard bancCard" type="text" placeholder="Banco"></h3>
                        <img class="chip" src="img/chip.png" alt="chip">
                        <input type="text" class="number textBoxCard numTarjCard" placeholder="0000 0000 0000 0000"></input>
                        <h5 class="valid"><span>Valido Hasta</span><input class="textBoxCard ValidCard" type="text" placeholder="04/22"></input></h5>
                        <h5 class="cred-holder"><input class="textBoxCard nombApCard" type="text" placeholder="Nombre y Apellido"></h5>
                    </div>
            </section>
        </section>
        
       
               

        <section class="SeccionBtnCompra">
      <button class="btnConfirm" id="realizarCompra" type="button">Confirmar Compra</button>
      </section>
      </form>
    `
    totalPrecioCompra.appendChild(divTotal);

    const realizarCompra = document.getElementById("realizarCompra");

    realizarCompra.addEventListener("click", ()=>{
        Swal.fire({
            title: "COMPRA EXITOSA!",
            icon:"success" ,
            text: "Gracias por elegirnos!",
            showCancelButton: false,
            showConfirmButton: false,
            backdrop: "radial-gradient(63.94% 1024px at 50% 200px, #244372 0%, #161A1F 100%)",

        })

        eliminarTodoElCarrito();

        return setTimeout(function(){ window.location = "http:/index.html"; }, 2000);
    
    })

    
 
    

}




//ejecutar


renderTotalCompraHTML();
mostrarValorCarritoIcon();
MostrarProductoComprados();