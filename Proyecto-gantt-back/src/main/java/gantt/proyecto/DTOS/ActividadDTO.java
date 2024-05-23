package gantt.proyecto.DTOS;

import java.time.LocalDate;

public class ActividadDTO {
    private Long id;
    private String nombre;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String participacion_ciudadana;
    private String Area;
    private long area_id;
    private long politica_id;
    private String politica;
    private String resultado_esperado;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
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
    public String getArea() {
        return Area;
    }
    public void setArea(String area) {
        Area = area;
    }
    public long getArea_id() {
        return area_id;
    }
    public void setArea_id(long area_id) {
        this.area_id = area_id;
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
    public String getResultado_esperado() {
        return resultado_esperado;
    }
    public void setResultado_esperado(String resultado_esperado) {
        this.resultado_esperado = resultado_esperado;
    }
    public ActividadDTO(Long id, String nombre, String descripcion, LocalDate fechaInicio, LocalDate fechaFin,
            String participacion_ciudadana, String area, long area_id, long politica_id, String politica,
            String resultado_esperado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.participacion_ciudadana = participacion_ciudadana;
        Area = area;
        this.area_id = area_id;
        this.politica_id = politica_id;
        this.politica = politica;
        this.resultado_esperado = resultado_esperado;
    }
    public ActividadDTO() {
    }
        
}
