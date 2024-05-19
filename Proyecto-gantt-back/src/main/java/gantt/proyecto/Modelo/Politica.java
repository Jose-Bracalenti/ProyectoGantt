package gantt.proyecto.Modelo;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "politica")
public class Politica {
    @Id
    private long politica_id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "costo")
    private float costo;
    @ManyToOne
    @JoinColumn(name = "idSecretaria", referencedColumnName="secretaria_id", nullable = false, foreignKey = @ForeignKey(name = "FK_POLITICA_SECRETARIA", value = ConstraintMode.CONSTRAINT))
    private Secretaria secretaria_responsable;
    @ManyToOne
    @JoinColumn(name = "idObjetivo", referencedColumnName = "objetivo_id", nullable = false, foreignKey = @ForeignKey(name = "FK_POLITICA_OBJETIVO", value = ConstraintMode.CONSTRAINT))
    private Objetivo objetivo;
    @OneToMany
    @JoinColumn(name = "idPolitica", referencedColumnName = "politica_id", nullable = true)
    private List<Actividad> actividades;


    public Politica() {
    }

    
    public Politica(long politica_id, String nombre, String descripcion, float costo, Secretaria secretaria_responsable,
            Objetivo objetivo) {
        this.politica_id = politica_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
        this.secretaria_responsable = secretaria_responsable;
        this.objetivo = objetivo;
    }


    public long getPolitica_id() {
        return politica_id;
    }


    public void setPolitica_id(long politica_id) {
        this.politica_id = politica_id;
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


    public float getCosto() {
        return costo;
    }


    public void setCosto(float costo) {
        this.costo = costo;
    }


    public Secretaria getSecretaria_responsable() {
        return secretaria_responsable;
    }


    public void setSecretaria_responsable(Secretaria secretaria_responsable) {
        this.secretaria_responsable = secretaria_responsable;
    }


    public Objetivo getObjetivo() {
        return objetivo;
    }


    public void setObjetivo(Objetivo objetivo) {
        this.objetivo = objetivo;
    }


    public List<Actividad> getActividades() {
        return actividades;
    }


    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }


    
}
