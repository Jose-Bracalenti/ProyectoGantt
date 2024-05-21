package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioSecretariaInterface {
    Secretaria insertar(Secretaria obj);
    Secretaria modificar(Secretaria obj);
    void eliminar(Secretaria obj);
    Secretaria buscarPorId(long id);
    List<Secretaria> buscarPorNombre(String nombre);
    List<Secretaria> buscarTodo();
}
