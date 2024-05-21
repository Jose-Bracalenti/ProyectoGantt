package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Repositorios.DAOS.AreaDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioAreaInterface;

import gantt.proyecto.Modelo.*;
@Service
public class ServicioArea implements ServicioAreaInterface{
   @Autowired
    private AreaDAO AreaDAO;
    public Area insertar(Area Area) {
       return AreaDAO.save(Area);
    }
    public Area modificar(Area obj) {
         return AreaDAO.save(obj);
    }
    public void eliminar(Area obj) {
        AreaDAO.delete(obj);
    }
    public Area buscarPorId(long id) {
        return AreaDAO.findById(id).get();
    }
    public List<Area> buscarPorNombre(String nombre) {
        return AreaDAO.findByNombre(nombre);
    }
    public List<Area> buscarTodo() {
        return AreaDAO.findAll();
    }
  

}
