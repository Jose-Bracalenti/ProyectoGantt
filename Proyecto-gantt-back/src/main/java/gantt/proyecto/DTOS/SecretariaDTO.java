package gantt.proyecto.DTOS;



public class SecretariaDTO {
    private long id;
    private String nombre;
    public SecretariaDTO() {
    }
    public SecretariaDTO(String nombre, long id) {
        this.nombre = nombre;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    
}
