package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.SecretariaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioSecretariaInterface;
import jakarta.transaction.Transactional;
@Service
public class ServicioSecretaria implements ServicioSecretariaInterface{
    @Autowired
    private SecretariaDAO secretariaDAO;
    @Transactional
    public void insertar(Secretaria obj) {
        secretariaDAO.insertar(obj);
    }
    @Transactional
    public void modificar(Secretaria obj) {
        secretariaDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(Secretaria obj) {
        secretariaDAO.eliminar(obj);
    }
    public Secretaria buscarPorId(long id) {
        return secretariaDAO.buscarPorId(id);
    }
    public List<Secretaria> buscarPorNombre(String nombre) {
        return secretariaDAO.buscarPorNombre(nombre);
    }
    public List<Secretaria> buscarTodo() {
        return secretariaDAO.buscarTodos();
    }
    
}
