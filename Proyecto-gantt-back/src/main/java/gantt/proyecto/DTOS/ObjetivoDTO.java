package gantt.proyecto.DTOS;


public class ObjetivoDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private String eje;
    private long eje_id;
    

    public ObjetivoDTO() {
    }
    
    public ObjetivoDTO( String nombre, String descripcion, String eje, long eje_id, long id) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.eje = eje;
        this.eje_id = eje_id;
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

    public String getEje() {
        return eje;
    }

    public void setEje(String eje) {
        this.eje = eje;
    }

    public long getEje_id() {
        return eje_id;
    }

    public void setEje_id(long eje_id) {
        this.eje_id = eje_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    
}
