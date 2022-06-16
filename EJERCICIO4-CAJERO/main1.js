let cuenta = new Cuenta("David Tello",400,"14-01-2022", 23435454);
let cuentaGiro = new Cuenta("Maria Ruiz",400,"14-01-2022", 12345678);
let cajero = new Cajero();
cajero.MostrarCuenta(cuenta);

const botones = document.querySelectorAll(".botones .btn");
botones.forEach(boton => {
    
    boton.addEventListener("click",function(){
        document.getElementById("operaciones").classList.add("aparece");
        let valor = parseInt(boton.id);
        switch (valor) {
            case 1:
                console.log("Depositar")
                document.getElementById("textoOperacion").textContent = "Depositar";
 
                // cajero.Depositar(cuenta,deposito);
                    document.getElementById("enviar").addEventListener("click", function(){
                        let deposito = document.getElementById("valorInput").value; 
                        console.log(deposito)
                        cajero.MostrarCuenta(cajero.Depositar(cuenta,deposito));
                });
                break;
            case 2:
                console.log("Girar");
                document.getElementById("textoOperacion").textContent = "Girar";
                document.getElementById("cuentaGiro").classList.add("aparece")
                document.getElementById("enviar").addEventListener("click", function(){
                let nroCuenta = document.getElementById("cuentaEnvio").value;
                let giro = document.getElementById("valorInput").value;
                cajero.Girar(cuentaGiro,nroCuenta,giro);
                })
                break;
            case 3:
                console.log("Retirar")
                document.getElementById("textoOperacion").textContent = "Retirar";
                document.getElementById("enviar").addEventListener("click", function(){
                    let retiro = document.getElementById("valorInput").value; 
                    console.log(retiro)
                    cajero.MostrarCuenta(cajero.Retirar(cuenta,retiro));
            });
                break;
        
            default:
                break;
        } 
    });

 
});
