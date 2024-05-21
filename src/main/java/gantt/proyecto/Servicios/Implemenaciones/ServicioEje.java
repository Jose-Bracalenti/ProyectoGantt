package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import gantt.proyecto.Servicios.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import gantt.proyecto.Repositorios.DAOS.EjeDAO;

import gantt.proyecto.Modelo.*;
@Service
public class ServicioEje implements ServicioEJeInterface{
   @Autowired
    private EjeDAO EjeDAO;
    public Eje insertar(Eje Eje) {
       return EjeDAO.save(Eje);
    }
    public Eje modificar(Eje obj) {
         return EjeDAO.save(obj);
    }
    public void eliminar(Eje obj) {
        EjeDAO.delete(obj);
    }
    public Eje buscarPorId(long id) {
        return EjeDAO.findById(id).get();
    }
    public List<Eje> buscarPorNombre(String nombre) {
        return EjeDAO.findByNombre(nombre);
    }
    public List<Eje> buscarTodo() {
        return EjeDAO.findAll();
    }
}
