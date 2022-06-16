class TransporteAereo extends Transporte{
    constructor(aeropuerto, nroAzafatas,piloto,pasaje,nroPasajeros,ruta,horario) {
        super(pasaje,nroPasajeros,ruta,horario);
        this.aeropuerto=aeropuerto;
        this.nroAzafatas=nroAzafatas;
        this.piloto=piloto;
    }
    Volar(combustible,piloto1,piloto2){
         if(piloto1==null && piloto2 == null || combustible>100){
             return "No cuenta con los requisitos para despegar";
         }else{
             return "despegue exitoso";
         }
    }
    Aterrizar(aeropuerto){
        return "se esta aterrizando en el aeropuerto "+aeropuerto;
    }



}