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

    public PoliticaDTO insertar(PoliticaDTO Politica, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioActividad ServicioActividad, ServicioArea ServicioArea) {
        return this.mapToDTO(PoliticaDAO.save(this.mapToEntity(Politica, ServicioObjetivo, ServicioSecretaria, ServicioActividad, ServicioArea)), ServicioActividad);
    }
    public PoliticaDTO modificar(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioActividad ServicioActividad, ServicioArea ServicioArea) {
        return this.mapToDTO(PoliticaDAO.save(this.mapToEntity(obj, ServicioObjetivo, ServicioSecretaria, ServicioActividad, ServicioArea)), ServicioActividad);
    }
    public void eliminar(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioActividad ServicioActividad, ServicioArea ServicioArea) {
        PoliticaDAO.delete(this.mapToEntity(obj, ServicioObjetivo, ServicioSecretaria, ServicioActividad, ServicioArea));
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
    public PoliticaDTO mapToDTO(Politica obj, ServicioActividad ServicioActividad) {
        PoliticaDTO dto = new PoliticaDTO();
        dto.setNombre(obj.getNombre());
        dto.setDescripcion(obj.getDescripcion()); 
        dto.setObjetivo(obj.getObjetivo().getNombre());
        dto.setObjetivo_id(obj.getObjetivo().getId());
        dto.setSecretaria(obj.getSecretaria_responsable().getNombre());
        dto.setSecretaria_id(obj.getSecretaria_responsable().getid());
        dto.setActividades(obj.getActividades().stream().map(x -> ServicioActividad.mapToDTO(x)).collect(Collectors.toList()));
        return dto;
    }
    public Politica mapToEntity(PoliticaDTO obj, ServicioObjetivo ServicioObjetivo, ServicioSecretaria ServicioSecretaria, ServicioActividad ServicioActividad, ServicioArea ServicioArea) {
        Politica entity = new Politica();
        entity.setNombre(obj.getNombre());
        entity.setDescripcion(obj.getDescripcion());
        entity.setObjetivo(ServicioObjetivo.buscarPorId(obj.getObjetivo_id()));
        entity.setSecretaria_responsable(ServicioSecretaria.buscarPorId(obj.getSecretaria_id()));
        entity. setActividades(obj.getActividades().stream().map(x -> ServicioActividad.mapToEntity(x, entity, ServicioArea)).collect(Collectors.toList()));
        System.out.println(entity.getActividades());
        return entity;
    }
    public ServicioPolitica() {
    }
}
