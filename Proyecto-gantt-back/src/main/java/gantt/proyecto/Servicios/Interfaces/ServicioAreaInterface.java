package gantt.proyecto.Servicios.Interfaces;
import java.util.List;

import gantt.proyecto.DTOS.AreaDTO;
import gantt.proyecto.Modelo.*;
public interface ServicioAreaInterface {
    AreaDTO insertar(AreaDTO obj);
    AreaDTO modificar(AreaDTO obj);
    void eliminar(AreaDTO obj);
    Area buscarPorId(long id);
    List<Area> buscarPorNombre(String nombre);
    List<Area> buscarTodo();
}
