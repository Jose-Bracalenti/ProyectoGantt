package gantt.proyecto.Repositorios.Interfaces;
import gantt.proyecto.Modelo.*;
import java.util.List;

public interface DAOinterface<T> {
    public void insertar(T obj);
    public void modificar(T obj);
    public void eliminar(T obj);
    public T buscarPorId(long id);
    public List<T> buscarTodos();
    public List<T> buscarPorNombre(String nombre);
    public List<T> buscarPorEje(Eje eje);
    public List<T> buscarPorSecretaria(Secretaria secretaria);
}
