package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioActividadInterface;
@Service
public class ServicioActividad implements ServicioActividadInterface{
    @Autowired
    private ActividadDAO actividadDAO;

    @Transactional
    public void insertar(@Validated @RequestBody Actividad obj) {
        actividadDAO.insertar(obj);
    }
    @Transactional
    public void modificar(@Validated @RequestBody Actividad obj) {
        actividadDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(@Validated @RequestBody Actividad obj) {
        actividadDAO.eliminar(obj);
    }
    
    public Actividad buscarPorId(long id) {
        return actividadDAO.buscarPorId(id);
    }
   
    public List<Actividad> buscarPorNombre(String nombre) {
        return actividadDAO.buscarPorNombre(nombre);
    }
    
    public List<Actividad> buscarPorEje(Eje eje) {
        return actividadDAO.buscarPorEje(eje);
    }
    
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return actividadDAO.buscarPorSecretaria(secretaria);
    }
    
    public List<Actividad> buscarTodos() {
        return actividadDAO.buscarTodos();
    }
    
    public List<Actividad> buscarPorArea(Area area) {
        return actividadDAO.buscarPorArea(area);
    }

}
