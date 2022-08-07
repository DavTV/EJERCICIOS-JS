
const $form = document.querySelector(".buscador");
const $cancion = document.querySelector("#cancion");
const $artista= document.querySelector("#artista");
const $loading= document.querySelector(".loading");
const $respuesta = document.querySelector("#respuesta")
$form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        let cancion = $cancion.value;
        let artista = $artista.value;   
        $form.querySelector("button").disabled =true;
        $form.querySelector("button").style.display="none";    
        $loading.classList.remove("d-none"); 
        // artistApi=` theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        let fecthCancion = fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);     
        let fecthDetalles = fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${artista}`);  
        
        [RespuestaCancion, RespuestaDetalle] = await Promise.all([fecthCancion,fecthDetalles]);

        let cancionData = await RespuestaCancion.json();
        let detalleData = await RespuestaDetalle.json();
        $form.querySelector("button").disabled =false;
        $form.querySelector("button").style.display="block";
        $loading.classList.add("d-none"); 
        console.log(cancionData,detalleData);
        $respuesta.innerHTML = `
            <div class="grid">
                <div class="cancion-letra">
                   <p>${cancionData.lyrics}</p> 
                </div>    
                <div>
                    <img src="${detalleData.artists[0].strArtistThumb}"  />
                    ${detalleData.artists[0].strBiographyEN}
                </div>    
            </div>
        
        `;
        console.log($respuesta);

    } catch (error) {
        console.log(error)
        $loading.classList.add("d-none"); 
        $form.querySelector("button").style.display="block";
        $form.querySelector("button").disabled =false;
        $form.querySelector("button").style.display="block";
        $loading.classList.add("d-none");

    }

})
