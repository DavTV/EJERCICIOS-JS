class Libreria{

    Selector(tipo,nombre){
        if(tipo == "#"){
            return document.querySelector(`#${nombre}`)
        }else if(tipo == "."){
            return document.querySelector(`.${nombre}`)
        }else{
            return document.querySelector(`${nombre}`)
        }
    }
    Card(titulo, contenido, boton){
            let card = document.createElement("div");
            card.className= "card";
            card.innerHTML=`
                <h2>${titulo}</h2>
                <p>${contenido}</p>
                <button>${boton}</button>
            
            `
        return card;
    }
}