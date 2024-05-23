package gantt.proyecto.Modelo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "objetivo")
public class Objetivo {
    @Id
    private long objetivo_id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @OneToMany(mappedBy = "objetivo",fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Politica> Politicas;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eje_id", referencedColumnName = "eje_id", nullable = false)
    private Eje eje;

    
    public Objetivo(long id, String nombre, String descripcion, List<Politica> politicas, Eje eje) {
        this.objetivo_id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        Politicas = new ArrayList<Politica>();
        this.eje = eje;
    }

    public Objetivo() {
    }

    public long getId() {
        return objetivo_id;
    }

    public void setId(long id) {
        this.objetivo_id = id;
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

    public List<Politica> getPoliticas() {
        return Politicas;
    }

    public void setPoliticas(List<Politica> politicas) {
        Politicas = politicas;
    }

    public Eje getEje() {
        return eje;
    }

    public void setEje(Eje eje) {
        this.eje = eje;
    }
    
}
