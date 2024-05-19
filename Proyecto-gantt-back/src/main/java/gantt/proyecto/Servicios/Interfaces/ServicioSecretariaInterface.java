package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioSecretariaInterface {
    void insertar(Secretaria obj);
    void modificar(Secretaria obj);
    void eliminar(Secretaria obj);
    Secretaria buscarPorId(long id);
    List<Secretaria> buscarPorNombre(String nombre);
    List<Secretaria> buscarTodo();
}
