

export class FileItem {
    
    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    public estaSubiendo: boolean;
    public progreso: number;

    constructor ( archivo: File ){
        this.archivo = archivo;
        this.estaSubiendo = false;
        this.nombreArchivo = archivo.name;
        this.progreso = 0;
    }
}