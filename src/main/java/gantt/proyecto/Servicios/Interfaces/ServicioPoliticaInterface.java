package gantt.proyecto.Servicios.Interfaces;
import java.util.List;
import gantt.proyecto.Modelo.*;
public interface ServicioPoliticaInterface {
    Politica insertar(Politica obj);
    Politica modificar(Politica obj);
    void eliminar(Politica obj);
    Politica buscarPorId(long id);
    List<Politica> buscarPorNombre(String nombre);
    List<Politica> buscarTodo();
    List<Politica> buscarPorEje(Eje eje);
    List<Politica> buscarPorSecretaria(Secretaria secretaria);
    List<Politica> buscarPorObjetivo(Objetivo objetivo);
}
