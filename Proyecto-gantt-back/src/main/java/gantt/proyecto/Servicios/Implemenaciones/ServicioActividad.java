package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;

@Service
public class ServicioActividad{
    @Autowired
    private ActividadDAO ActividadDAO;
    public ActividadDTO insertar(ActividadDTO Actividad, Politica politica, ServicioArea ServicioArea) {
        politica.getActividades().add(this.mapToEntity(Actividad, politica, ServicioArea));
       return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad, politica, ServicioArea)));
    }
    public ActividadDTO modificar(ActividadDTO Actividad, Politica Politica, ServicioArea ServicioArea) {
         return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad, Politica, ServicioArea)));
    }
    public void eliminar(ActividadDTO Actividad, Politica Politica, ServicioArea ServicioArea) {
        ActividadDAO.delete(this.mapToEntity(Actividad, Politica, ServicioArea));
    }
    public Actividad buscarPorId(long id) {
        return ActividadDAO.findById(id).get();
    }
    public List<Actividad> buscarPorNombre(String nombre) {
        return ActividadDAO.findByNombre(nombre);
    }
    public List<Actividad> buscarTodo() {
        return ActividadDAO.findAll();
    }
    public List<Actividad> buscarPorEje(Eje eje) {
        return eje.getObjetivos().stream().map(Objetivo::getPoliticas).map(lista -> lista.stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get()).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return secretaria.getPoliticas().stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    public List<Actividad> buscarTodos() {
        return ActividadDAO.findAll();
    }

    public List<Actividad> buscarPorArea(Area area) {
        return area.getActividades();
    }
    public final ActividadDTO mapToDTO(Actividad actividad){
        ActividadDTO dto = new ActividadDTO();
        dto.setId(actividad.getId());
        dto.setNombre(actividad.getNombre());
        dto.setDescripcion(actividad.getDescripcion());
        dto.setFechaInicio(actividad.getFecha_inicio());
        dto.setFechaFin(actividad.getFecha_fin());
        dto.setParticipacion_ciudadana(actividad.getParticipacion_ciudadana());
        dto.setArea(actividad.getArea().getNombre());
        dto.setArea_id(actividad.getArea().getid());
        dto.setPolitica(actividad.getPolitica().getNombre());
        dto.setPolitica_id(actividad.getPolitica().getPolitica_id());
        dto.setResultado_esperado(actividad.getResultado_esperado());
        return dto;
    }
    public final Actividad mapToEntity(ActividadDTO dto, Politica politica, ServicioArea ServicioArea){
        Actividad actividad = new Actividad();
        actividad.setId(dto.getId());
        actividad.setNombre(dto.getNombre());
        actividad.setDescripcion(dto.getDescripcion());
        actividad.setFecha_inicio(dto.getFechaInicio());
        actividad.setFecha_fin(dto.getFechaFin());
        actividad.setParticipacion_ciudadana(dto.getParticipacion_ciudadana());
        actividad.setResultado_esperado(dto.getResultado_esperado());
        actividad.setPolitica(politica);
        actividad.setArea(ServicioArea.buscarPorId(dto.getArea_id()));
        return actividad;
    }
}
