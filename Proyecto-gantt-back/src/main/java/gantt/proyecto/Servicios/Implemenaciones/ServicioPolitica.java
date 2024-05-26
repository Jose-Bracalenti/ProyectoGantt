package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.PoliticaDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.PoliticaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioPoliticaInterface;

@Service
public class ServicioPolitica implements ServicioPoliticaInterface{
    
    @Autowired
    private PoliticaDAO PoliticaDAO;
    @Autowired
    @Lazy
    private ServicioObjetivo ServicioObjetivo;
    @Autowired
    @Lazy
    private ServicioActividad ServicioActividad;
    public PoliticaDTO insertar(PoliticaDTO Politica) {
        return this.mapToDTO(PoliticaDAO.save(this.mapToEntity(Politica)));
    }
    public PoliticaDTO modificar(PoliticaDTO obj) {
        return this.mapToDTO(PoliticaDAO.save(this.mapToEntity(obj)));
    }
    public void eliminar(PoliticaDTO obj) {
        PoliticaDAO.delete(this.mapToEntity(obj));
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
    public PoliticaDTO mapToDTO(Politica obj) {
        PoliticaDTO dto = new PoliticaDTO();
        dto.setId(obj.getPolitica_id());
        dto.setNombre(obj.getNombre());
        dto.setDescripcion(obj.getDescripcion()); 
        dto.setObjetivo(obj.getObjetivo().getNombre());
        dto.setObjetivo_id(obj.getObjetivo().getId());
        dto.setActividades(obj.getActividades().stream().map(x -> ServicioActividad.mapToDTO(x)).collect(Collectors.toList()));
        return dto;
    }
    public Politica mapToEntity(PoliticaDTO obj) {
        Politica entity = new Politica();
        entity.setPolitica_id(obj.getId());
        entity.setNombre(obj.getNombre());
        entity.setDescripcion(obj.getDescripcion());
        entity.setObjetivo(ServicioObjetivo.buscarPorId(obj.getId()));
        entity.setActividades(obj.getActividades().stream().map(x -> ServicioActividad.mapToEntity(x)).collect(Collectors.toList()));
        return entity;
    }
}
