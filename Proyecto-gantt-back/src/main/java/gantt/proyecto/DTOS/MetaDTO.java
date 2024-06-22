package gantt.proyecto.DTOS;

public class MetaDTO {
    public Long meta_id;
    public Long politica_id;
    public String nombre;
    public float valor;
    public String unidad;
    public String estado;
    public MetaDTO() {
    }
    public MetaDTO(Long meta_id, Long politica_id, String nombre, float valor, String unidad, String estado) {
        this.meta_id = meta_id;
        this.politica_id = politica_id;
        this.nombre = nombre;
        this.valor = valor;
        this.unidad = unidad;
        this.estado = estado;
    }
    public Long getMeta_id() {
        return meta_id;
    }
    public void setMeta_id(Long meta_id) {
        this.meta_id = meta_id;
    }
    public Long getPolitica_id() {
        return politica_id;
    }
    public void setPolitica_id(Long politica_id) {
        this.politica_id = politica_id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public float getValor() {
        return valor;
    }
    public void setValor(float valor) {
        this.valor = valor;
    }
    public String getUnidad() {
        return unidad;
    }
    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    
}
