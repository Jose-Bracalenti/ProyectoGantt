package gantt.proyecto.DTOS;

import java.util.List;

public class EjeDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private List<ObjetivoDTO> objetivos;
    public EjeDTO() {
    }
    public EjeDTO(long id, String nombre, String descripcion, List<ObjetivoDTO> objetivos) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.objetivos = objetivos;
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
    public List<ObjetivoDTO> getObjetivos() {
        return objetivos;
    }
    public void setObjetivos(List<ObjetivoDTO> objetivos) {
        this.objetivos = objetivos;
    }
   
}
