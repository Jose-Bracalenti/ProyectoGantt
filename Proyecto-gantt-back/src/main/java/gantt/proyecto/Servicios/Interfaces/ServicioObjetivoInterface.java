package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioObjetivoInterface {
    Objetivo insertar(Objetivo obj);
    Objetivo modificar(Objetivo obj);
    void eliminar(Objetivo obj);
    Objetivo buscarPorId(long id);
    List<Objetivo> buscarPorNombre(String nombre);
    List<Objetivo> buscarTodo();
    List<Objetivo> buscarPorEje(Eje eje);
}
