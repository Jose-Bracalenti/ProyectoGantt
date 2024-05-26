package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.ObjetivoDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ObjetivoDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioObjetivoInterface;
import jakarta.transaction.Transactional;

@Service
@Transactional(rollbackOn = {Exception.class})
public class ServicioObjetivo implements ServicioObjetivoInterface{
    @Autowired
    private ObjetivoDAO ObjetivoDAO;
    @Autowired
    @Lazy
    private ServicioEje ServicioEje;
    
    public ObjetivoDTO insertar(ObjetivoDTO Objetivo) {
         return this.mapToDTO(ObjetivoDAO.save(this.mapToEntity(Objetivo)));
    }
    public ObjetivoDTO modificar(ObjetivoDTO obj) {
            return this.mapToDTO(ObjetivoDAO.save(this.mapToEntity(obj)));
    }
    public void eliminar(ObjetivoDTO obj) {
        ObjetivoDAO.delete(this.mapToEntity(obj));
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
    public List<Objetivo> buscarPorEje(Long ejeId) {
        return ObjetivoDAO.findByEje(ServicioEje.buscarPorId(ejeId));
    }
    public final ObjetivoDTO mapToDTO(Objetivo objetivo){
        ObjetivoDTO dto = new ObjetivoDTO();
        dto.setId(objetivo.getId());
        dto.setNombre(objetivo.getNombre());
        dto.setDescripcion(objetivo.getDescripcion());
        dto.setEje(objetivo.getEje().getNombre());
        dto.setEje_id(objetivo.getEje().getid());
        return dto;
    }
    public final Objetivo mapToEntity(ObjetivoDTO dto){
        Objetivo objetivo = new Objetivo();
        objetivo.setId(dto.getId());
        objetivo.setNombre(dto.getNombre());
        objetivo.setDescripcion(dto.getDescripcion());
        objetivo.setEje(ServicioEje.buscarPorId(dto.getEje_id()));
        return objetivo;
    }
}
