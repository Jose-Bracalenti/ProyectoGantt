package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Repositorios.DAOS.AreaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioAreaInterface;
import jakarta.transaction.Transactional;
import gantt.proyecto.Modelo.*;
@Service
public class ServicioArea implements ServicioAreaInterface{
    @Autowired
    private AreaDAO areaDAO;

    @Transactional
    public void insertar(Area obj) {
        areaDAO.insertar(obj);
    }
    @Transactional
    public void modificar(Area obj) {
        areaDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(Area obj) {
        areaDAO.eliminar(obj);
    }
    public Area buscarPorId(long id) {
        return areaDAO.buscarPorId(id);
    }
    public List<Area> buscarPorNombre(String nombre) {
        return areaDAO.buscarPorNombre(nombre);
    }
    public List<Area> buscarTodo() {
        return areaDAO.buscarTodos();
    }
    public List<Area> buscarPorSecretaria(Secretaria secretaria) {
        return areaDAO.buscarPorSecretaria(secretaria);
    }
  

}
