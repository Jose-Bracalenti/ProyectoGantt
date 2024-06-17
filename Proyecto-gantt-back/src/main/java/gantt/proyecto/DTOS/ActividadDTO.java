package gantt.proyecto.DTOS;

import java.time.LocalDate;

public class ActividadDTO {
    private long id;
    private String nombre;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String participacion_ciudadana;
    private long area_id;
    private String Area;
    private String item;
    private String resultado_esperado;
    private float costo;

    public ActividadDTO() {
    }

    public ActividadDTO(long id, String nombre, String descripcion, LocalDate fechaInicio, LocalDate fechaFin,
            String participacion_ciudadana, long area_id, String area, String item, String resultado_esperado,
            float costo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.participacion_ciudadana = participacion_ciudadana;
        this.area_id = area_id;
        Area = area;
        this.item = item;
        this.resultado_esperado = resultado_esperado;
        this.costo = costo;
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

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getParticipacion_ciudadana() {
        return participacion_ciudadana;
    }

    public void setParticipacion_ciudadana(String participacion_ciudadana) {
        this.participacion_ciudadana = participacion_ciudadana;
    }

    public long getArea_id() {
        return area_id;
    }

    public void setArea_id(long area_id) {
        this.area_id = area_id;
    }

    public String getArea() {
        return Area;
    }

    public void setArea(String area) {
        Area = area;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getResultado_esperado() {
        return resultado_esperado;
    }

    public void setResultado_esperado(String resultado_esperado) {
        this.resultado_esperado = resultado_esperado;
    }

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }      
    
        
}
