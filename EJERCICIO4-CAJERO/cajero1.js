class Cajero{
    MostrarCuenta(cuenta){
        document.getElementById("nombre").textContent = cuenta.nombre;
        document.getElementById("saldo").textContent = cuenta.saldo;
        document.getElementById("fecha").textContent = cuenta.fecha;
        document.getElementById("numero").textContent = cuenta.numero;    
        // return "exitoso"    
    }
    Depositar(cuenta,deposito){
        cuenta.saldo = parseInt(cuenta.saldo) +parseInt( deposito);
        return cuenta;
    }
    Retirar(cuenta, retiro){
        if(retiro > cuenta.saldo){
            return cuenta;
        }else{
            cuenta.saldo = parseInt(cuenta.saldo) - parseInt( retiro);
            return cuenta;
        }
    }
    Girar(cuentaGiro, nroCuenta,giro){
        if(cuentaGiro.numero == nroCuenta){
            console.log(cuentaGiro);
            cuentaGiro.saldo = parseInt(cuentaGiro.saldo)+parseInt(giro);
            this.MostrarCuenta(cuentaGiro);
        }else{
            document.getElementById("nombre").textContent ="Cuenta no existe";
            document.getElementById("saldo").textContent = "00.00";
            document.getElementById("fecha").textContent = "--";
            document.getElementById("numero").textContent = "--"; 
       
        }
    }
}