package gantt.proyecto.Modelo;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

import gantt.proyecto.IDclasses.ItemId;

@IdClass(ItemId.class)
@Entity
@Table(name = "item")
public class Item {
    @Id
    @SequenceGenerator(name="my_seq", sequenceName="my_db_table_seq", allocationSize=1)
    @GeneratedValue(generator = "my_seq")
    private Long item_id;

    @Id
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "politica_id", referencedColumnName = "politica_id", nullable = false)
    private Politica politica;

    @Column
    private String nombre;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Actividad> actividades;
    
    public Item() {
    }

    public Item(Politica politica, String nombre, List<Actividad> actividades) {
        this.politica = politica;
        this.nombre = nombre;
        this.actividades = actividades;
    }

    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Actividad> getActividades() {
        return actividades;
    }

    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }
}
