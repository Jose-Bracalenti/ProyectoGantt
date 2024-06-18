package gantt.proyecto.Modelo;

import java.time.LocalDate;


import jakarta.persistence.*;

@Entity
@Table(name = "actividad")
public class Actividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long actividad_id;
    @Column
    private String nombre;
    @Column(columnDefinition = "text")
    private String descripcion;
    @Column
    private LocalDate fecha_inicio;
    @Column
    private LocalDate fecha_fin;
    @Column(columnDefinition = "text")
    private String resultado_esperado;
    @ManyToOne
    @JoinColumns({
        @JoinColumn(name = "item_id", referencedColumnName = "item_id"),
        @JoinColumn(name = "politica_id", referencedColumnName = "politica_id")
    })
    private Item item;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "area_id",nullable = true, referencedColumnName = "area_id", foreignKey = @ForeignKey(name = "FK_ACTIVIDAD_AREA", value = ConstraintMode.CONSTRAINT))
    private Area area;
    @Column(columnDefinition = "text")
    private String participacion_ciudadana;
    @Column
    private float costo;

    public Actividad() {
    }

    public Actividad(String nombre, String descripcion, LocalDate fecha_inicio, LocalDate fecha_fin,
            String resultado_esperado, Item item, Area area, String participacion_ciudadana, float costo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.resultado_esperado = resultado_esperado;
        this.item = item;
        this.area = area;
        this.participacion_ciudadana = participacion_ciudadana;
        this.costo = costo;
    }

    public long getActividad_id() {
        return actividad_id;
    }

    public void setActividad_id(long actividad_id) {
        this.actividad_id = actividad_id;
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

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
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

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }

   
    
}
