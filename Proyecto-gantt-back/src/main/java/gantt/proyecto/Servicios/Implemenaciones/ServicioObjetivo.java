package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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
    private ServicioPolitica ServicioPolitica;
    @Autowired
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
    @Override
    public List<Objetivo> buscarPorEje(Eje eje) {
        return eje.getObjetivos();
    }
    public final ObjetivoDTO mapToDTO(Objetivo objetivo){
        ObjetivoDTO dto = new ObjetivoDTO();
        dto.setId(objetivo.getId());
        dto.setNombre(objetivo.getNombre());
        dto.setDescripcion(objetivo.getDescripcion());
        dto.setEje(objetivo.getEje().getNombre());
        dto.setEje_id(objetivo.getEje().getid());
        dto.setPoliticas(objetivo.getPoliticas().stream().map(x -> ServicioPolitica.mapToDTO(x)).collect(Collectors.toList()));
        return dto;
    }
    public final Objetivo mapToEntity(ObjetivoDTO dto){
        Objetivo objetivo = new Objetivo();
        objetivo.setId(dto.getId());
        objetivo.setNombre(dto.getNombre());
        objetivo.setDescripcion(dto.getDescripcion());
        objetivo.setEje(ServicioEje.buscarPorId(dto.getEje_id()));
        objetivo.setPoliticas(dto.getPoliticas().stream().map(x -> ServicioPolitica.mapToEntity(x)).collect(Collectors.toList()));
        return objetivo;
    }
}
