package gantt.proyecto.POJOS;

import java.time.LocalDate;

import org.hibernate.annotations.Collate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.websocket.ClientEndpoint;

@Entity
@Table(name = "actividad")
public class Actividad {
    @Id
    private int id;
    @Column
    private String nombre;
    @Column
    private String descripcion;
    @Column
    private LocalDate fecha_inicio;
    @Column
    private LocalDate fecha_fin;
    @Column
    private float costo;
    @Column
    private String resultado_esperado;


}
