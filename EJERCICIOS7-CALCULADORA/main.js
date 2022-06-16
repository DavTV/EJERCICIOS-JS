const primerValor = document.getElementById("valor1");
const segundoValor = document.getElementById("valor2");
const operacion = document.getElementById("operaciones");
const disparador = document.getElementById("operar");

const Calculadora = new Calculadora();
lanzarOperaciones();

function lanzarOperaciones(){
    disparador.addEventListener("click",function(){
        e.preventDefault();
        let valor = operacion.value;
       
        switch (valor) {
            case 1:
                calculadora.Sumar(parseInt(primerValor),parseInt(segundoValor.value));
                break;
            case 2:
                calculadora.Restar(parseInt(primerValor.value),parseInt(segundoValor.value));
                break;
            case 3:
                calculadora.Multiplicar(parseInt(primerValor.value),parseInt(segundoValor.value));
                break;
            case 4:
                calculadora.Dividir(parseInt(primerValor.value),parseInt(segundoValor.value));
                break;
            default:
                alert("Ingrese una operación primero")
                break;
        }
    })
}
