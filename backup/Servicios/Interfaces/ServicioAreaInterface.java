package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioAreaInterface {
    void insertar(Area obj);
    void modificar(Area obj);
    void eliminar(Area obj);
    Area buscarPorId(long id);
    List<Area> buscarPorNombre(String nombre);
    List<Area> buscarTodo();
}
