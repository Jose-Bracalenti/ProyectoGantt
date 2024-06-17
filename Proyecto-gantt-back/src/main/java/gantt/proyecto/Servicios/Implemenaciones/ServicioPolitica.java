package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.PoliticaDTO;
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
                    ServicioActividad)), servicioItem);
    }
    public PoliticaDTO modificar(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioItem servicioItem, ServicioArea ServicioArea, ServicioActividad ServicioActividad) {
        return this.mapToDTO(
            PoliticaDAO.save(
                this.mapToEntity(
                    obj, 
                    ServicioObjetivo, 
                    ServicioSecretaria, 
                    servicioItem, 
                    ServicioArea, 
                    ServicioActividad)), servicioItem);
        
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
    public PoliticaDTO mapToDTO(Politica obj, ServicioItem servicioItem) {
        PoliticaDTO dto = new PoliticaDTO();
        dto.setId(obj.getPolitica_id());
        dto.setNombre(obj.getNombre());
        dto.setDescripcion(obj.getDescripcion()); 
        dto.setObjetivo(obj.getObjetivo().getNombre());
        dto.setObjetivo_id(obj.getObjetivo().getId());
        dto.setSecretaria(obj.getSecretaria().getNombre());
        dto.setSecretaria_id(obj.getSecretaria().getid());
        dto.setItems(obj.getItems().stream().map(x -> servicioItem.mapToDTO(x)).collect(Collectors.toList()));
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
