class Calculadora{
    
    Sumar(valor1,valor2){
        document.getElementById("contenedor") 
        let resusltado;
        resusltado = valor1+valor2;
        let data = document.createElement("div");
    
        data.innerHTML= `
    
        <div class="texto bg-primary container ps-3">
                    <p>El resultado de la suma es:"
                    <br>
                    ${resusltado}
              </div>
    `;
        contenedor.appendChild(data);
    }
    Restar(valor1,valor2){
        const contenedor = document.getElementsById("contenedor") 
        let resusltado;
        resusltado = valor1-valor2;
        let data = document.createElement("div");
    
        data.textContent= `
    
        <div class="texto bg-primary container ps-3">
                    <p>El resultado de la  resta es:"
                    <br>
                    ${resusltado}
              </div>
    `;
        contenedor.appendChild(data);
    }
    Multiplicar(valor1,valor2){
        const contenedor = document.getElementById("contenedor") 
        let resusltado;
        valor1 =0;
        resusltado = valor1*valor2;
        let data = document.createElement("div");
    
        data.innerHTML= `
    
        <div class="texto bg-primary container ps-3">
                    <p>El resultado de la Multiplicación es:"
                    <br>
                    ${resusltado}
              </div>
    `;
        contenedor.appendChild(data);
    }
    Dividir(valor1,valor2){
        const contenedor = document.getElementById("contenedor") 
        let resusltado;
        resusltado = valor1/valor2;
        let data = document.createElement("div");
    
        data.innerHTML= `
    
        <div class="texto bg-primary container ps-3">
                    <p>El resultado de la División es:"
                    <br>
                    ${resusltados}
              </div>
    `;
        contenedor.appendChild(data);
    }

}