package gantt.proyecto.Modelo;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "area")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long area_id;
    @Column
    private String nombre;
    @OneToMany(mappedBy = "area",fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Actividad> actividades;
    @Column
    private String color;

    public Area() {
    }

   

    



    public Area(long area_id, String nombre, List<Actividad> actividades, String color) {
        this.area_id = area_id;
        this.nombre = nombre;
        this.actividades = actividades;
        this.color = color;
    }







    public long getid() {
        return area_id;
    }



    public String getNombre() {
        return nombre;
    }



    public List<Actividad> getActividades() {
        return actividades;
    }



    public String getColor() {
        return color;
    }







    public void setid(long area_id) {
        this.area_id = area_id;
    }







    public void setNombre(String nombre) {
        this.nombre = nombre;
    }







    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }







    public void setColor(String color) {
        this.color = color;
    }



    
}
