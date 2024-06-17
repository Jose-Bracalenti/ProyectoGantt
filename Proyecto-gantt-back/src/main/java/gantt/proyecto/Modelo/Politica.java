package gantt.proyecto.Modelo;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "politica")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long politica_id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion", columnDefinition = "text")
    private String descripcion;
    @Column(name = "costo")
    private float costo;
    @ManyToOne
    @JoinColumn(name = "secretaria_id", referencedColumnName="secretaria_id", nullable = false, foreignKey = @ForeignKey(name = "FK_POLITICA_SECRETARIA", value = ConstraintMode.CONSTRAINT))
    private Secretaria secretaria;
    @ManyToOne
    @JoinColumn(name = "objetivo_id", referencedColumnName = "objetivo_id", nullable = false, foreignKey = @ForeignKey(name = "FK_POLITICA_OBJETIVO", value = ConstraintMode.CONSTRAINT))
    private Objetivo objetivo;
    @OneToMany(mappedBy = "politica", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;


    public Politica() {
    }


    public Politica(String nombre, String descripcion, float costo, Secretaria secretaria, Objetivo objetivo,
            List<Item> items) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
        this.secretaria = secretaria;
        this.objetivo = objetivo;
        this.items = items;
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


    public Secretaria getSecretaria() {
        return secretaria;
    }


    public void setSecretaria(Secretaria secretaria) {
        this.secretaria = secretaria;
    }


    public Objetivo getObjetivo() {
        return objetivo;
    }


    public void setObjetivo(Objetivo objetivo) {
        this.objetivo = objetivo;
    }


    public List<Item> getItems() {
        return items;
    }


    public void setItems(List<Item> items) {
        this.items = items;
    }

    
    
}
