package gantt.proyecto.Servicios.Interfaces;

import java.util.List;

import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.Modelo.*;

public interface ServicioActividadInterface {
    ActividadDTO insertar(ActividadDTO obj);
    ActividadDTO modificar(ActividadDTO obj);
    void eliminar(ActividadDTO obj);
    Actividad buscarPorId(long id);
    List<Actividad> buscarPorNombre(String nombre);
    List<Actividad> buscarPorEje(Eje eje);
    List<Actividad> buscarPorSecretaria(Secretaria secretaria);
    List<Actividad> buscarTodos();
    List<Actividad> buscarPorArea(Area area);
}
