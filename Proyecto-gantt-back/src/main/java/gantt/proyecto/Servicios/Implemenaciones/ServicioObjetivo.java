package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.EjeDTO;
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
    public List<Objetivo> buscarPorEje(Long id, ServicioEje ServicioEje) {
        return ObjetivoDAO.findByEje(ServicioEje.buscarPorId(id).get());
    }
    public List<Objetivo> buscarConEjes(List<EjeDTO> ejes) {
        List<Objetivo> objetivos = ObjetivoDAO.findAll();
        List<Long> eje_ids = ejes.stream().map(x -> x.getId()).toList();
        objetivos = objetivos.stream().filter(x -> eje_ids.contains(x.getEje().getid())).collect(Collectors.toList());
        return objetivos; 
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
        objetivo.setNombre(dto.getNombre());
        objetivo.setDescripcion(dto.getDescripcion());
        objetivo.setEje(ServicioEje.buscarPorId(dto.getEje_id()).get());
        return objetivo;
    }
}
