package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.PoliticaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioPoliticaInterface;

@Service
public class ServicioPolitica implements ServicioPoliticaInterface{
    
    @Autowired
    private PoliticaDAO PoliticaDAO;
    public Politica insertar(Politica Politica) {
       return PoliticaDAO.save(Politica);
    }
    public Politica modificar(Politica obj) {
         return PoliticaDAO.save(obj);
    }
    public void eliminar(Politica obj) {
        PoliticaDAO.delete(obj);
    }
    public Politica buscarPorId(long id) {
        return PoliticaDAO.findById(id).get();
    }
    public List<Politica> buscarPorNombre(String nombre) {
        return PoliticaDAO.findByNombre(nombre);
    }
    public List<Politica> buscarTodo() {
        return PoliticaDAO.findAll();
    }
    public List<Politica> buscarPorObjetivo(Objetivo objetivo) {
        return objetivo.getPoliticas();
    }
    @Override
    public List<Politica> buscarPorEje(Eje eje) {
        return eje.getObjetivos().stream().map(Objetivo::getPoliticas).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    @Override
    public List<Politica> buscarPorSecretaria(Secretaria secretaria) {
        return secretaria.getPoliticas();
    }
}
