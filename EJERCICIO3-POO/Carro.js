class Carro extends TransporteTerrestre{
    constructor(nroRuedas,chofer,pasaje,nroPasajeros,ruta,horario,matricula){
        super(nroRuedas,chofer,pasaje,nroPasajeros,ruta,horario)
        this.matricula=matricula;
    }
}