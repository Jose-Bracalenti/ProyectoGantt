package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import gantt.proyecto.Servicios.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gantt.proyecto.Repositorios.DAOS.EjeDAO;
import gantt.proyecto.Modelo.*;
@Service
public class ServicioEje implements ServicioEJeInterface{
    @Autowired
    private EjeDAO ejeDAO;

    @Transactional
    public void insertar(Eje obj) {
        ejeDAO.insertar(obj);
    }
    @Transactional
    public void modificar(Eje obj) {
        ejeDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(Eje obj) {
        ejeDAO.eliminar(obj);
    }
    public Eje buscarPorId(long id) {
        return ejeDAO.buscarPorId(id);
    }
    public List<Eje> buscarPorNombre(String nombre) {
        return ejeDAO.buscarPorNombre(nombre);
    }
    public List<Eje> buscarTodo() {
        return ejeDAO.buscarTodos();
    }
    
}
