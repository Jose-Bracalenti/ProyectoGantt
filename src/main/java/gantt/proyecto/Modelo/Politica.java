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

    public Politica(long id, String nombre, String descripcion, Secretaria secretaria_responsable,
            List<Actividad> actividades) {
        this.politica_id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.secretaria_responsable = secretaria_responsable;
        this.actividades = actividades;
    }
    public long getId() {
        return politica_id;
    }
    public void setId(int id) {
        this.politica_id = id;
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
    public Secretaria getSecretaria_responsable() {
        return secretaria_responsable;
    }
    public void setSecretaria_responsable(Secretaria secretaria_responsable) {
        this.secretaria_responsable = secretaria_responsable;
    }
    public List<Actividad> getActividades() {
        return actividades;
    }
    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }
    
    
}
