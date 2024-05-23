package gantt.proyecto.DTOS;

import java.util.List;

public class AreaDTO {
    private long id;
    private String nombre;
    private List<ActividadDTO> actividades;

    public AreaDTO() {
    }
    
    public AreaDTO(long id, String nombre, List<ActividadDTO> actividades) {
        this.id = id;
        this.nombre = nombre;
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

    public List<ActividadDTO> getActividades() {
        return actividades;
    }

    public void setActividades(List<ActividadDTO> actividades) {
        this.actividades = actividades;
    }
    
}
