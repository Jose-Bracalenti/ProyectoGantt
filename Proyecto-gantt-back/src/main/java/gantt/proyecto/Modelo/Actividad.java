package gantt.proyecto.Modelo;

import java.time.LocalDate;


import jakarta.persistence.*;

@Entity
@Table(name = "actividad")
public class Actividad {
    @Id
    private long actividad_id;
    @Column
    private String nombre;
    @Column
    private String descripcion;
    @Column
    private LocalDate fecha_inicio;
    @Column
    private LocalDate fecha_fin;
    @Column
    private String resultado_esperado;
    @ManyToOne
    @JoinColumn(name = "politica_id",nullable = true, referencedColumnName = "politica_id", foreignKey = @ForeignKey(name = "FK_ACTIVIDAD_POLITICA", value = ConstraintMode.CONSTRAINT))
    private Politica politica;
    @ManyToOne
    @JoinColumn(name = "area_id",nullable = true, referencedColumnName = "area_id", foreignKey = @ForeignKey(name = "FK_ACTIVIDAD_AREA", value = ConstraintMode.CONSTRAINT))
    private Area area;
    private String participacion_ciudadana;

    public Actividad() {
    }

    public Actividad(long id, String nombre, String descripcion, LocalDate fecha_inicio, LocalDate fecha_fin, String resultado_esperado, Politica politica, Area area) {
        this.actividad_id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.resultado_esperado = resultado_esperado;
        this.politica = politica;
        this.area = area;
    }

    public long getId() {
        return actividad_id;
    }

    public void setId(int id) {
        this.actividad_id = id;
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

    public LocalDate getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(LocalDate fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public LocalDate getFecha_fin() {
        return fecha_fin;
    }

    public void setFecha_fin(LocalDate fecha_fin) {
        this.fecha_fin = fecha_fin;
    }

    public String getResultado_esperado() {
        return resultado_esperado;
    }

    public void setResultado_esperado(String resultado_esperado) {
        this.resultado_esperado = resultado_esperado;
    }

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public String getParticipacion_ciudadana() {
        return participacion_ciudadana;
    }

    public void setParticipacion_ciudadana(String participacion_ciudadana) {
        this.participacion_ciudadana = participacion_ciudadana;
    }
    
}
