package gantt.proyecto.Servicios.Interfaces;

import java.util.List;

import gantt.proyecto.Modelo.*;

public interface ServicioActividadInterface {
    Actividad insertar(Actividad obj);
    Actividad modificar(Actividad obj);
    void eliminar(Actividad obj);
    Actividad buscarPorId(long id);
    List<Actividad> buscarPorNombre(String nombre);
    List<Actividad> buscarPorEje(Eje eje);
    List<Actividad> buscarPorSecretaria(Secretaria secretaria);
    List<Actividad> buscarTodos();
    List<Actividad> buscarPorArea(Area area);
}