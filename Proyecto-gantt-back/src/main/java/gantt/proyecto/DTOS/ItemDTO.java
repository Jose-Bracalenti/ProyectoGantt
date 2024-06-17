package gantt.proyecto.DTOS;

import java.util.List;

public class ItemDTO {
    private long id;
    private String nombre;
    private long politica_id;
    private String politica;
    private List<ActividadDTO> actividades;

    public ItemDTO() {
    }

    public ItemDTO(String nombre, long politica_id, String politica, List<ActividadDTO> actividades) {
        this.nombre = nombre;
        this.politica_id = politica_id;
        this.politica = politica;
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

    public long getPolitica_id() {
        return politica_id;
    }

    public void setPolitica_id(long politica_id) {
        this.politica_id = politica_id;
    }

    public String getPolitica() {
        return politica;
    }

    public void setPolitica(String politica) {
        this.politica = politica;
    }

    public List<ActividadDTO> getActividades() {
        return actividades;
    }

    public void setActividades(List<ActividadDTO> actividades) {
        this.actividades = actividades;
    }
    
}
