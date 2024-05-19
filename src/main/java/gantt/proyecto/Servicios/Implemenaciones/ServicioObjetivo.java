package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ObjetivoDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioObjetivoInterface;
import jakarta.transaction.Transactional;

@Service
public class ServicioObjetivo implements ServicioObjetivoInterface{
    @Autowired 
    private ObjetivoDAO objetivoDAO;
    @Transactional
    public void insertar(Objetivo obj) {
        objetivoDAO.insertar(obj);
    }
    @Transactional
    public void modificar(Objetivo obj) {
        objetivoDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(Objetivo obj) {
        objetivoDAO.eliminar(obj);
    }
    public Objetivo buscarPorId(long id) {
        return objetivoDAO.buscarPorId(id);
    }
    public List<Objetivo> buscarPorNombre(String nombre) {
        return objetivoDAO.buscarPorNombre(nombre);
    }
    public List<Objetivo> buscarPorEje(Eje eje) {
        return objetivoDAO.buscarPorEje(eje);
    }
    public List<Objetivo> buscarTodo() {
        return objetivoDAO.buscarTodos();
    }
}
