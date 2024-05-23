package gantt.proyecto.DTOS;

import java.util.List;

public class PoliticaDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private String area;
    private long area_id;
    private String objetivo;
    private long objetivo_id;
    private List<ActividadDTO> actividades;
    public PoliticaDTO() {
    }
    public PoliticaDTO(long id, String nombre, String descripcion, String area, long area_id, String objetivo,
            long objetivo_id, List<ActividadDTO> actividades) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.area = area;
        this.area_id = area_id;
        this.objetivo = objetivo;
        this.objetivo_id = objetivo_id;
        this.actividades = actividades;
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
    public String getObjetivo() {
        return objetivo;
    }
    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }
    public long getObjetivo_id() {
        return objetivo_id;
    }
    public void setObjetivo_id(long objetivo_id) {
        this.objetivo_id = objetivo_id;
    }
    public List<ActividadDTO> getActividades() {
        return actividades;
    }
    public void setActividades(List<ActividadDTO> actividades) {
        this.actividades = actividades;
    }
    
}
