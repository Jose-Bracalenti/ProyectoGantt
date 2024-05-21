package gantt.proyecto.Modelo;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "area")
public class Area {
    @Id
    private long area_id;
    @Column
    private String nombre;
    @OneToMany
    @JoinColumn(name = "area_id",referencedColumnName = "area_id", nullable = true)
    private List<Actividad> actividades;

    public Area() {
    }

    public Area(long area_id, String nombre, List<Actividad> actividades) {
        this.area_id = area_id;
        this.nombre = nombre;
        this.actividades = new ArrayList<Actividad>();
    }

    public long getid() {
        return area_id;
    }

    public void setid(long area_id) {
        this.area_id = area_id;
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
