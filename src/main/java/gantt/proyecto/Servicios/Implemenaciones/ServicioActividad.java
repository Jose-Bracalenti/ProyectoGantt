package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioActividadInterface;
@Service
public class ServicioActividad implements ServicioActividadInterface{
    @Autowired
    private ActividadDAO ActividadDAO;
    public Actividad insertar(Actividad Actividad) {
       return ActividadDAO.save(Actividad);
    }
    public Actividad modificar(Actividad obj) {
         return ActividadDAO.save(obj);
    }
    public void eliminar(Actividad obj) {
        ActividadDAO.delete(obj);
    }
    public Actividad buscarPorId(long id) {
        return ActividadDAO.findById(id).get();
    }
    public List<Actividad> buscarPorNombre(String nombre) {
        return ActividadDAO.findByNombre(nombre);
    }
    public List<Actividad> buscarTodo() {
        return ActividadDAO.findAll();
    }
    @Override
    public List<Actividad> buscarPorEje(Eje eje) {
        return eje.getObjetivos().stream().map(Objetivo::getPoliticas).map(lista -> lista.stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get()).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    @Override
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return secretaria.getPoliticas().stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    @Override
    public List<Actividad> buscarTodos() {
        return ActividadDAO.findAll();
    }
    @Override
    public List<Actividad> buscarPorArea(Area area) {
        return area.getActividades();
    }

}
