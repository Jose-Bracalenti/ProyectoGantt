package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ObjetivoDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioObjetivoInterface;
import jakarta.transaction.Transactional;

@Service
@Transactional(rollbackOn = {Exception.class})
public class ServicioObjetivo implements ServicioObjetivoInterface{
    @Autowired
    private ObjetivoDAO ObjetivoDAO;
    public Objetivo insertar(Objetivo Objetivo) {
       return ObjetivoDAO.save(Objetivo);
    }
    public Objetivo modificar(Objetivo obj) {
         return ObjetivoDAO.save(obj);
    }
    public void eliminar(Objetivo obj) {
        ObjetivoDAO.delete(obj);
    }
    public Objetivo buscarPorId(long id) {
        return ObjetivoDAO.findById(id).get();
    }
    public List<Objetivo> buscarPorNombre(String nombre) {
        return ObjetivoDAO.findByNombre(nombre);
    }
    public List<Objetivo> buscarTodo() {
        return ObjetivoDAO.findAll();
    }
    @Override
    public List<Objetivo> buscarPorEje(Eje eje) {
        return eje.getObjetivos();
    }
}
