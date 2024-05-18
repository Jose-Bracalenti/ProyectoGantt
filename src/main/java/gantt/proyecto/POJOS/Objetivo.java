package gantt.demo.POJOS;

import java.util.List;

import org.hibernate.annotations.Collate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "objetivo")
public class Objetivo {
    @Id
    private int id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    private List<Politica> Politicas;
    private Eje eje;
}
