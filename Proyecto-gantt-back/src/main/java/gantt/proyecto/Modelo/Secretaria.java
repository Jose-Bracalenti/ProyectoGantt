package gantt.proyecto.Modelo;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;



@Entity
@Table(name = "secretaria")
public class Secretaria {
    @Id
    private long secretaria_id;
    @Column
    private String nombre;
    @OneToMany(mappedBy = "secretaria",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Politica> politicas;

    public Secretaria() {
    }

    public Secretaria(long secretaria_id, String nombre, List<Politica> politicas) {
        this.secretaria_id = secretaria_id;
        this.nombre = nombre;
        this.politicas = politicas;
    }

    public long getid() {
        return secretaria_id;
    }

    public void setid(long secretaria_id) {
        this.secretaria_id = secretaria_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(List<Politica> politicas) {
        this.politicas = politicas;
    }
    
}
