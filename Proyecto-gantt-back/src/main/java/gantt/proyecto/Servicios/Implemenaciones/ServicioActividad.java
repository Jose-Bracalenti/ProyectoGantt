package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;

@Service
public class ServicioActividad{
    @Autowired
    private ActividadDAO ActividadDAO;
    public ActividadDTO insertar(ActividadDTO Actividad, Item item, ServicioArea ServicioArea) {
        item.getActividades().add(this.mapToEntity(Actividad, item, ServicioArea));
       return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad, item, ServicioArea)), ServicioArea);
    }
    public ActividadDTO modificar(ActividadDTO Actividad, Item item, ServicioArea ServicioArea) {
         return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad, item, ServicioArea)), ServicioArea);
    }
    public void eliminar(ActividadDTO Actividad, Item item, ServicioArea ServicioArea) {
        ActividadDAO.delete(this.mapToEntity(Actividad, item, ServicioArea));
    }
    public Actividad buscarPorId(long id) {
        return ActividadDAO.findById(id).get();
    }
    public Optional<Actividad> buscarPorNombre(String nombre) {
        return ActividadDAO.findByNombre(nombre);
    }
    public List<Actividad> buscarTodo() {
        return ActividadDAO.findAll();
    }
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return null;
    }
    public List<Actividad> buscarTodos() {
        return ActividadDAO.findAll();
    }
    public List<Actividad> buscarPorArea(long area, ServicioArea servicioArea) {
        return ActividadDAO.findByArea(servicioArea.buscarPorId(area));
    }
    public final ActividadDTO mapToDTO(Actividad actividad, ServicioArea servicioArea){
        ActividadDTO dto = new ActividadDTO();
        dto.setId(actividad.getActividad_id());
        dto.setNombre(actividad.getNombre());
        dto.setDescripcion(actividad.getDescripcion());
        dto.setFechaInicio(actividad.getFecha_inicio());
        dto.setFechaFin(actividad.getFecha_fin());
        dto.setParticipacion_ciudadana(actividad.getParticipacion_ciudadana());
        dto.setArea(servicioArea.mapToDTO(actividad.getArea()));
        dto.setItem(actividad.getItem().getNombre());
        dto.setResultado_esperado(actividad.getResultado_esperado());
        dto.setCosto(actividad.getCosto());
        return dto;
    }
    public final Actividad mapToEntity(ActividadDTO dto, Item item, ServicioArea servicioArea){
        Actividad actividad = new Actividad();
        actividad.setNombre(dto.getNombre());
        actividad.setDescripcion(dto.getDescripcion());
        actividad.setFecha_inicio(dto.getFechaInicio());
        actividad.setFecha_fin(dto.getFechaFin());
        actividad.setParticipacion_ciudadana(dto.getParticipacion_ciudadana());
        actividad.setResultado_esperado(dto.getResultado_esperado());
        actividad.setItem(item);
        actividad.setArea(servicioArea.buscarPorNombre(dto.getArea().getNombre()));
        actividad.setCosto(dto.getCosto());
        return actividad;
    }
}
