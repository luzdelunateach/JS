class Autor{
    private nombre:string;
    private foto:string;
    private correo:string;
    private puesto:string;
    private fecha:string;
    private status:string;

    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre=nombre;
    }
    public getEmail(){
        return this.correo;
    }
    public setEmail(email:string){
        this.correo=email;
    }
    public getFoto(){
        return this.foto;
    }
    public setFoto(foto:string){
        this.foto=foto;
    }
    public getPuesto(){
        return this.puesto;
    }
    public setPuesto(puesto:string){
        this.puesto=puesto;
    }
    public getFecha(){
        return this.fecha;
    }
    public setFecha(fecha:string){
        this.fecha=fecha;
    }
    public getStatus(){
        return this.status;
    }
    public setStatus(status:string){
        this.status=status;
    }
    
    constructor(nombre:string,foto:string,correo:string,puesto:string,fecha:string,status:string){
        this.nombre=nombre;
        this.foto=foto;
        this.correo=correo;
        this.puesto=puesto;
        this.fecha=fecha;
        this.status=status;
    }
}