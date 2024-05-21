package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.SecretariaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioSecretariaInterface;
import jakarta.transaction.Transactional;
@Service
@Transactional(rollbackOn = {Exception.class})
public class ServicioSecretaria implements ServicioSecretariaInterface{
    @Autowired
    private SecretariaDAO secretariaDAO;
    public Secretaria insertar(Secretaria secretaria) {
       return secretariaDAO.save(secretaria);
    }
    public Secretaria modificar(Secretaria obj) {
         return secretariaDAO.save(obj);
    }
    public void eliminar(Secretaria obj) {
        secretariaDAO.delete(obj);
    }
    public Secretaria buscarPorId(long id) {
        return secretariaDAO.findById(id).get();
    }
    public List<Secretaria> buscarPorNombre(String nombre) {
        return secretariaDAO.findByNombre(nombre);
    }
    public List<Secretaria> buscarTodo() {
        return secretariaDAO.findAll();
    }
    
}
