package gantt.proyecto.DTOS;

public class PoliticaDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private String area;
    private long area_id;
    public PoliticaDTO() {
    }
    public PoliticaDTO(long id, String nombre, String descripcion, String area, long area_id) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.area = area;
        this.area_id = area_id;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
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
    public String getArea() {
        return area;
    }
    public void setArea(String area) {
        this.area = area;
    }
    public long getArea_id() {
        return area_id;
    }
    public void setArea_id(long area_id) {
        this.area_id = area_id;
    }
}
