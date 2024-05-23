package gantt.proyecto.Servicios.Interfaces;
import java.util.List;

import gantt.proyecto.DTOS.SecretariaDTO;
import gantt.proyecto.Modelo.*;
public interface ServicioSecretariaInterface {
    SecretariaDTO insertar(SecretariaDTO obj);
    SecretariaDTO modificar(SecretariaDTO obj);
    void eliminar(SecretariaDTO obj);
    Secretaria buscarPorId(long id);
    List<Secretaria> buscarPorNombre(String nombre);
    List<Secretaria> buscarTodo();
}
