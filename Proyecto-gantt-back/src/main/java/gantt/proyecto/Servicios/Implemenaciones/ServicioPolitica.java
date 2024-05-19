package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.PoliticaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioPoliticaInterface;

@Service
public class ServicioPolitica implements ServicioPoliticaInterface{
    @Autowired
    private PoliticaDAO politicaDAO;
    @Transactional
    public void insertar(Politica obj) {
        politicaDAO.insertar(obj);
    }
    @Transactional
    public void modificar(Politica obj) {
        politicaDAO.modificar(obj);
    }
    @Transactional
    public void eliminar(Politica obj) {
        politicaDAO.eliminar(obj);
    }
    public Politica buscarPorId(long id) {
        return politicaDAO.buscarPorId(id);
    }
    public List<Politica> buscarPorNombre(String nombre) {
        return politicaDAO.buscarPorNombre(nombre);
    }
    public List<Politica> buscarTodo() {
        return politicaDAO.buscarTodos();
    }
    @Override
    public List<Politica> buscarPorEje(Eje eje) {
        return politicaDAO.buscarPorEje(eje);
    }
    @Override
    public List<Politica> buscarPorSecretaria(Secretaria secretaria) {
       return politicaDAO.buscarPorSecretaria(secretaria);
    }
    @Override
    public List<Politica> buscarPorObjetivo(Objetivo objetivo) {
        return politicaDAO.buscarPorObjetivo(objetivo);
    }
}
