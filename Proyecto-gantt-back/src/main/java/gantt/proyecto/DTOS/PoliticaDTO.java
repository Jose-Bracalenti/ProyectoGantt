package gantt.proyecto.DTOS;

import java.util.List;

public class PoliticaDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private String objetivo;
    private long objetivo_id;
    private long eje_id;
    private String eje;
    private String secretaria;
    private long secretaria_id;
    private float costo;
    private List<ItemDTO> items;
    private List<MetaDTO> metas;
    public PoliticaDTO() {
    }
    
    public PoliticaDTO(long id, String nombre, String descripcion, String objetivo, long objetivo_id, String secretaria,
            long secretaria_id, float costo, List<ItemDTO> items, List<MetaDTO> metas, long eje_id, String eje) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.objetivo = objetivo;
        this.objetivo_id = objetivo_id;
        this.secretaria = secretaria;
        this.secretaria_id = secretaria_id;
        this.costo = costo;
        this.items = items;
        this.metas = metas;
        this.eje_id = eje_id;
        this.eje = eje;
    }
    public long getEje_id() {
        return eje_id;
    }
    public void setEje_id(long eje_id) {
        this.eje_id = eje_id;
    }
    public String getEje() {
        return eje;
    }
    public void setEje(String eje) {
        this.eje = eje;
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
    public String getSecretaria() {
        return secretaria;
    }
    public void setSecretaria(String secretaria) {
        this.secretaria = secretaria;
    }
    public long getSecretaria_id() {
        return secretaria_id;
    }
    public void setSecretaria_id(long secretaria_id) {
        this.secretaria_id = secretaria_id;
    }
    public float getCosto() {
        return costo;
    }
    public void setCosto(float costo) {
        this.costo = costo;
    }
    public List<ItemDTO> getItems() {
        return items;
    }
    public void setItems(List<ItemDTO> items) {
        this.items = items;
    }

    public List<MetaDTO> getMetas() {
        return metas;
    }

    public void setMetas(List<MetaDTO> metas) {
        this.metas = metas;
    }
    
   
    
}
