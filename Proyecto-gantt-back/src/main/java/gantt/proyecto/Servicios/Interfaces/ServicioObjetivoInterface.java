package gantt.proyecto.Servicios.Interfaces;
import java.util.List;

import gantt.proyecto.DTOS.ObjetivoDTO;
import gantt.proyecto.Modelo.*;
public interface ServicioObjetivoInterface {
    ObjetivoDTO insertar(ObjetivoDTO obj);
    ObjetivoDTO modificar(ObjetivoDTO obj);
    void eliminar(ObjetivoDTO obj);
    Objetivo buscarPorId(long id);
    List<Objetivo> buscarPorNombre(String nombre);
    List<Objetivo> buscarTodo();
    List<Objetivo> buscarPorEje(Long eje);
}
