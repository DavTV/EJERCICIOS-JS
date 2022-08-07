ApiJquery();
function ApiJquery() {
    $.ajax({
    
        url:"https://pokeapi.co/api/v2/pokemon/",
        method:"GET"
    
    }).done(function( data ) {
         console.log(data);
         let dataPokemon = data.results;
         let contenedorRespuesta =  $(".respuesta-jquery");
         
         for (let i = 0; i < dataPokemon.length; i++) {
             
             let card = document.createElement("div");
             const element = dataPokemon[i];
             
             $.ajax({
                 url: `https://pokeapi.co/api/v2/pokemon/${element.name}`,
                 method:"GET"
    
             }).done(function( data ) {
                 let detallePokemon = data.abilities[0];
                 
                 card.className = "my-2 col-6 col-md-4"
                     card.innerHTML= `
                     <div class="p-2 border rounded">
                         <img src="${data.sprites.back_default}" />
                         <img src="${data.sprites.front_default}" />
                         <p><span class="fw-bold">Nombre:</span> ${element.name}</p>
                         <p><span class="fw-bold">Abilidad:</span> ${detallePokemon.ability.name}</p>
                         <button class="btn btn-warning w-100 my-3" >Capturar</button>
                     </div>
                     `;
    
                    //  console.log(card);
                     contenedorRespuesta.append(card);
                 }).fail(function( error ) {
                     console.log( 'Error: ' , error );
                 });
                             
    
         }
      
         }).fail(function( error ) {
         console.log( 'Error: ' , error );
     });
  }

// ApiFetch();
function ApiFetch(){
    const respuestaFetch = document.getElementById("respuesta-fetch");
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            // console.log(res);
            if(res.ok){
                return res.json();
            }else{
                return Promise.reject(res);
            }
        })
        .then((json)=>{
            // console.log(json);
            json.forEach(el => {
                let card = document.createElement("div")
                card.className= "col-6 col-md-6 p-2";
                card.innerHTML=`
                    <div class="border rounded">
                        <p><b>Nombre: </b>${el.name}</p>
                        <p><b>Email: </b>${el.email}</p>
                        <p><b>Dirección: </b>${el.address.street} - ${el.address.city}</p>
                       
                    </div>
                `;
                respuestaFetch.appendChild(card)
            });
        })
        .catch((err)=>{
            let statusText = err.statusText || "Error de ruta";
            console.log("Error: "+ err.status +" : "+ statusText);
        });
}
ApiFetch2();
function ApiFetch2(){
    const respuestasFecth = document.getElementById("respuesta-fetch");
    fetch("data.json")

    .then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            return Promise.reject(res);
        }
    })

    .then((json)=>{
        console.log(json)
        json.forEach(el => {   
            let card = document.createElement("div");
            card.className ="col-6 col-md-4 p-2";
            card.innerHTML=`
            <div class="p-2 border rounded">
            <p><b>Nombre: </b>${el.name}</p>
            <p><b>Teléfono: </b>${el.phone}</p>
            <p><b>Dirección: </b>${el.address.street}-${el.address.city}</p>
            </div>
            `;
            console.log(card);
            respuestasFecth.appendChild(card);

        })
        
    })
    .catch((err)=>{
        let statusText = err.statusText || "Ruta no encontrada";
        console.log(err.status+":"+ statusText);
    });
}