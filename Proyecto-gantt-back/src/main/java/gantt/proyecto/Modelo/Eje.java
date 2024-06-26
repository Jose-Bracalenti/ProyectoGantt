package gantt.proyecto.Modelo;



import java.util.List;


import jakarta.persistence.*;

@Entity
@Table(name = "eje")
public class Eje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long eje_id;
    @Column(unique = true, nullable = false)
    private String nombre;
    @Column
    private String descripcion;
    @OneToMany(mappedBy = "eje",fetch = FetchType.LAZY)
    private List<Objetivo> objetivos;

    public Eje() {
    }

    public Eje(long eje_id, String nombre, String descripcion) {
        this.eje_id = eje_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public long getid() {
        return eje_id;
    }

    public void setid(long eje_id) {
        this.eje_id = eje_id;
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
    public List<Objetivo> getObjetivos() {
        return objetivos;
    }
    public void setObjetivos(List<Objetivo> objetivos) {
        this.objetivos = objetivos;
    }
    
}
