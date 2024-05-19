package gantt.proyecto.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import gantt.proyecto.Modelo.*;
import java.util.List;
import gantt.proyecto.Repositorios.Interfaces.RepositorioActividad;

@RestController
public class ActividadesController {
    @Autowired
    private final  RepositorioActividad repositorioActividad;

    public ActividadesController(RepositorioActividad repositorioActividad) {
        this.repositorioActividad = repositorioActividad;
    }
    @GetMapping("/actividades")
    public List<Actividad> getActividades() {
        return (List<Actividad>) repositorioActividad.findAll();
    }
    @GetMapping("/actividades/{id}")
    public Actividad getActividad(Long id) {
        return repositorioActividad.findById(id).get();
    }
    @PostMapping("/actividades")
    public Actividad addActividad(Actividad actividad) {
        return repositorioActividad.save(actividad);
    }
    @DeleteMapping("/actividades/{id}")
    public void deleteActividad(Long id) {
        repositorioActividad.deleteById(id);
    }
}
