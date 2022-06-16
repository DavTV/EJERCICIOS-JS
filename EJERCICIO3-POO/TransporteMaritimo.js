class TransporteMaritimo extends Transporte{
    constructor(capitan,pasaje,nroPasajeros,ruta,horario,nroBalsas) {
        super(pasaje,nroPasajeros,ruta,horario);
        this.capitan=capitan;
        this.nroBalsas=nroBalsas;
    }
    Navegar(ruta){
         if(ruta == "" ){
             return "No se puede navegar sin un destino";
         }else{
             return "Se empezo el viaje";
         }
    }
    Naufragar(ice){
        if(ice>100.50){
            return "El barco naufragara ";
        }else{
            return "Viaje seguro";
        }
        
    }
}