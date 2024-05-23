package gantt.proyecto.DTOS;

import java.util.List;

public class SecretariaDTO {
    private long id;
    private String nombre;
    private List<PoliticaDTO> politicas;  
    public SecretariaDTO() {
    }
    public SecretariaDTO(long id, String nombre, List<PoliticaDTO> politicas) {
        this.id = id;
        this.nombre = nombre;
        this.politicas = politicas;
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
    public List<PoliticaDTO> getPoliticas() {
        return politicas;
    }
    public void setPoliticas(List<PoliticaDTO> politicas) {
        this.politicas = politicas;
    }   
    
}
