package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.ObjetivoDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ObjetivoDAO;

import jakarta.transaction.Transactional;

@Service
@Transactional(rollbackOn = {Exception.class})
public class ServicioObjetivo{
    @Autowired
    private ObjetivoDAO ObjetivoDAO;
    
    public ObjetivoDTO insertar(ObjetivoDTO Objetivo, ServicioEje ServicioEje) {
         return this.mapToDTO(ObjetivoDAO.save(this.mapToEntity(Objetivo, ServicioEje)));
    }
    public ObjetivoDTO modificar(ObjetivoDTO obj, ServicioEje ServicioEje) {
            return this.mapToDTO(ObjetivoDAO.save(this.mapToEntity(obj, ServicioEje)));
    }
    public void eliminar(ObjetivoDTO obj, ServicioEje ServicioEje) {
        ObjetivoDAO.delete(this.mapToEntity(obj, ServicioEje));
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
    public List<Objetivo> buscarPorEje(Long ejeId, ServicioEje ServicioEje) {
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
    public final Objetivo mapToEntity(ObjetivoDTO dto, ServicioEje ServicioEje){
        Objetivo objetivo = new Objetivo();
        objetivo.setId(dto.getId());
        objetivo.setNombre(dto.getNombre());
        objetivo.setDescripcion(dto.getDescripcion());
        objetivo.setEje(ServicioEje.buscarPorId(dto.getEje_id()));
        return objetivo;
    }
}
