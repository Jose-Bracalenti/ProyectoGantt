package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioActividadInterface;
public class ServicioActividad implements ServicioActividadInterface{
    @Autowired
    private ActividadDAO actividadDAO;

    @PostMapping("/actividad")
    public void insertar(@Validated @RequestBody Actividad obj) {
        actividadDAO.insertar(obj);
    }
    @PutMapping("/actividad")
    public void modificar(@Validated @RequestBody Actividad obj) {
        actividadDAO.modificar(obj);
    }
    @DeleteMapping("/actividad")
    public void eliminar(@Validated @RequestBody Actividad obj) {
        actividadDAO.eliminar(obj);
    }
    @GetMapping("/actividad")
    public Actividad buscarPorId(long id) {
        return actividadDAO.buscarPorId(id);
    }
    @GetMapping("/actividad")
    public List<Actividad> buscarPorNombre(String nombre) {
        return actividadDAO.buscarPorNombre(nombre);
    }
    @GetMapping("/actividad")
    public List<Actividad> buscarPorEje(Eje eje) {
        return actividadDAO.buscarPorEje(eje);
    }
    @GetMapping("/actividad")
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return actividadDAO.buscarPorSecretaria(secretaria);
    }
    @GetMapping("/actividad")
    public List<Actividad> buscarTodos() {
        return actividadDAO.buscarTodos();
    }
    @GetMapping("/actividad")
    public List<Actividad> buscarPorArea(Area area) {
        return actividadDAO.buscarPorArea(area);
    }

}
