class TransporteTerrestre extends Transporte{
    constructor(pasaje,nroPasajeros,ruta,horario,nroRuedas,chofer) {
        super(pasaje,nroPasajeros,ruta,horario);
        this.nroRuedas=nroRuedas;
        this.chofer=chofer;
    }
    Taxear(combustible,pasajero){
         if(pasajero == null || combustible>100){
             return "No cuenta con pasajeros para manejar";
         }else{
             return "pasajero recogido con exito";
         }
    }
    Paradas(parada){
        return "El taxi se estaciono en la parada "+parada;
    }
}