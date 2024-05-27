package gantt.proyecto.DTOS;


public class EjeDTO {
    private long id;
    private String nombre;
    private String descripcion;
    public EjeDTO() {
    }
    public EjeDTO(String nombre, String descripcion, long id) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.id = id;

    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    
    
   
}
