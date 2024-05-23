package gantt.proyecto.Servicios.Interfaces;
import java.util.List;

import gantt.proyecto.DTOS.EjeDTO;
import gantt.proyecto.Modelo.*;
public interface ServicioEJeInterface {
    EjeDTO insertar(EjeDTO obj);
    EjeDTO modificar(EjeDTO obj);
    void eliminar(EjeDTO obj);
    Eje buscarPorId(long id);
    List<Eje> buscarPorNombre(String nombre);
    List<Eje> buscarTodo();
}
