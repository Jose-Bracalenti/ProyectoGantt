package gantt.proyecto.Servicios.Interfaces;
import java.util.List;

import gantt.proyecto.DTOS.PoliticaDTO;
import gantt.proyecto.Modelo.*;
public interface ServicioPoliticaInterface {
    PoliticaDTO insertar(PoliticaDTO obj);
    PoliticaDTO modificar(PoliticaDTO obj);
    void eliminar(PoliticaDTO obj);
    Politica buscarPorId(long id);
    List<Politica> buscarPorNombre(String nombre);
    List<Politica> buscarTodo();
    List<Politica> buscarPorEje(Eje eje);
    List<Politica> buscarPorSecretaria(Secretaria secretaria);
    List<Politica> buscarPorObjetivo(Objetivo objetivo);
}
