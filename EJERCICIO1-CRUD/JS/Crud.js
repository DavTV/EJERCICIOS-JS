class Crud{
    Agregar(producto){
        const contenedorVenta =  document.getElementById("contenedorVenta");
        let data = document.createElement("div");
        data.className= "venta d-flex justify-content-between";
    data.innerHTML= `
    
    <div class="texto  ps-3">
                    <p>El producto es :<span class="nombre"> ${producto.nombre}</span>, costo: <span class="costo">${producto.precio}</span>, la cantidad comprada fue: <span class="cantidad">${producto.precio}</span></p>
                  </div>
                  <div class="botones ">
                    <button  class="btn btn-outline-primary editar">Editar</button>
                    <button  class="btn btn-outline-danger eliminar ">Eliminar</button>
                </div>
              </div>
    
    
    `;
    contenedorVenta.appendChild(data);
    }
    Actualizar(e){
      if(e.target.classList.contains("editar")){ 
        const elemento = e.target.parentElement.parentElement;
        let nombre = elemento.querySelector(".nombre").textContent;
        let costo = elemento.querySelector(".costo").textContent;
        let cantidad = elemento.querySelector(".cantidad").textContent;
        console.log(parseFloat(cantidad))
        document.querySelector("#nombre").value =nombre;
        document.querySelector("#precio").value = costo;
        document.querySelector("#cantidad").value = cantidad;
        e.target.parentElement.parentElement.remove();
      }
    }
    
    Eliminar(e){
      if(e.target.classList.contains("eliminar")){ 
        const elemento = e.target.parentElement.parentElement.remove();
      }
    }
  }