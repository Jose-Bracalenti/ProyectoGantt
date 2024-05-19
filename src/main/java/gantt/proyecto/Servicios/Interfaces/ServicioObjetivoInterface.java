package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioObjetivoInterface {
    void insertar(Objetivo obj);
    void modificar(Objetivo obj);
    void eliminar(Objetivo obj);
    Objetivo buscarPorId(long id);
    List<Objetivo> buscarPorNombre(String nombre);
    List<Objetivo> buscarTodo();
    List<Objetivo> buscarPorEje(Eje eje);
}
