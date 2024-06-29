package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.*;
import gantt.proyecto.Modelo.*;

import gantt.proyecto.Repositorios.DAOS.PoliticaDAO;

@Service
public class ServicioPolitica{
    @Autowired
    private  PoliticaDAO PoliticaDAO;

    public PoliticaDTO insertar(PoliticaDTO Politica, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        return this.mapToDTO(
            PoliticaDAO.save(
                this.mapToEntity(
                    Politica, 
                    ServicioObjetivo, 
                    ServicioSecretaria, 
                    servicioItem, 
                    ServicioArea, 
                    ServicioActividad)), servicioItem, ServicioArea, ServicioActividad);
    }
    public PoliticaDTO modificar(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        Politica politica = PoliticaDAO.getReferenceById(obj.getId());
        politica.setNombre(obj.getNombre());
        politica.setDescripcion(obj.getDescripcion());
        politica.setObjetivo(ServicioObjetivo.buscarPorId(obj.getObjetivo_id()));
        politica.setSecretaria(ServicioSecretaria.buscarPorId(obj.getSecretaria_id()));
        politica.setCosto(obj.getCosto());
        for(ItemDTO item : obj.getItems()){
            if(item.getId() != 0){
                servicioItem.modificar(item, politica, ServicioActividad, ServicioArea);
            }else{
                servicioItem.insertar(item, politica, ServicioActividad, ServicioArea);
            }
        }
        return this.mapToDTO(
            PoliticaDAO.save(politica), servicioItem, ServicioArea, ServicioActividad);
        
    }
    public void eliminar(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        PoliticaDAO.delete(this.mapToEntity(obj, ServicioObjetivo, ServicioSecretaria, servicioItem, ServicioArea, ServicioActividad));
    }
    public Optional<Politica> buscarPorId(long id) {
        return PoliticaDAO.findById(id);
    }
    public List<Politica> buscarPorNombre(String nombre) {
        return PoliticaDAO.findByNombre(nombre);
    }
    public List<Politica> buscarTodo() {
        return PoliticaDAO.findAll();
    }
    public List<Politica> buscarPorObjetivo(long objetivo, ServicioObjetivo ServicioObjetivo) {
        return PoliticaDAO.findByObjetivo(ServicioObjetivo.buscarPorId(objetivo));
        
    }
    
    public List<Politica> buscarPorEje(Eje eje) {
        return eje.getObjetivos().stream().map(Objetivo::getPoliticas).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    public List<Politica> buscarPorSecretaria(long secretaria, ServicioSecretaria ServicioSecretaria) {
        return PoliticaDAO.findBySecretaria(ServicioSecretaria.buscarPorId(secretaria));
    }

    public List<Politica> buscarPorFiltro(FiltroDTO filtro, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioArea ServicioArea, ServicioPolitica ServicioPolitica, ServicioActividad ServicioActividad, ServicioEje ServicioEje) {
        List<Long> ejes_id = filtro.getEjes().stream().map(x -> x.getId()).collect(Collectors.toList());
        List<Long> objetivos_id = filtro.getObjetivos().stream().map(x-> x.getId()).collect(Collectors.toList());
        List<Long> secretarias_id = filtro.getSecretarias().stream().map(x->x.getId()).collect(Collectors.toList());
        List<Long> areas_id = filtro.getAreas().stream().map(x->x.getId()).collect(Collectors.toList());
        List<Politica> politicas = ServicioPolitica.buscarTodo();
        if(ejes_id.size() > 0){
            politicas = politicas.stream().filter(x -> ejes_id.contains(x.getObjetivo().getEje().getid())).collect(Collectors.toList());
            }
        if(objetivos_id.size() > 0){
            politicas = politicas.stream().filter(x -> objetivos_id.contains(x.getObjetivo().getId())).collect(Collectors.toList());
        }
        if(secretarias_id.size() > 0){
            politicas = politicas.stream().filter(x -> secretarias_id.contains(x.getSecretaria().getid())).collect(Collectors.toList());
        }
        if(areas_id.size() > 0){
            politicas = politicas.stream().filter(x -> x.getItems().stream().anyMatch(y -> y.getActividades().stream().anyMatch(z -> areas_id.contains(z.getArea().getid())))).collect(Collectors.toList());
        }
        return politicas;
    }
    public PoliticaDTO mapToDTO(Politica obj, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        PoliticaDTO dto = new PoliticaDTO();
        dto.setId(obj.getPolitica_id());
        dto.setNombre(obj.getNombre());
        dto.setDescripcion(obj.getDescripcion()); 
        dto.setObjetivo(obj.getObjetivo().getNombre());
        dto.setObjetivo_id(obj.getObjetivo().getId());
        dto.setEje_id(obj.getObjetivo().getEje().getid());
        dto.setEje(obj.getObjetivo().getEje().getNombre());
        dto.setSecretaria(obj.getSecretaria().getNombre());
        dto.setSecretaria_id(obj.getSecretaria().getid());
        dto.setItems(obj.getItems().stream().map(x -> servicioItem.mapToDTO(x, ServicioActividad, ServicioArea)).collect(Collectors.toList()));
        return dto;
    }
    public Politica mapToEntity(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        Politica entity = new Politica();
        entity.setNombre(obj.getNombre());
        entity.setDescripcion(obj.getDescripcion());
        entity.setObjetivo(ServicioObjetivo.buscarPorId(obj.getObjetivo_id()));
        entity.setSecretaria(ServicioSecretaria.buscarPorId(obj.getSecretaria_id()));
        entity.setItems(obj.getItems().stream().map(x -> servicioItem.mapToEntity(x, entity, ServicioActividad, ServicioArea)).collect(Collectors.toList()));
        entity.setCosto(obj.getCosto());
        return entity;
    }
    public ServicioPolitica() {
    }
}
