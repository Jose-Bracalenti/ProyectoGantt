package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioEJeInterface {
    void insertar(Eje obj);
    void modificar(Eje obj);
    void eliminar(Eje obj);
    Eje buscarPorId(long id);
    List<Eje> buscarPorNombre(String nombre);
    List<Eje> buscarTodo();
}
