package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ActividadDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioActividadInterface;
@Service
public class ServicioActividad implements ServicioActividadInterface{
    @Autowired
    private ActividadDAO ActividadDAO;
    @Autowired
    @Lazy
    private ServicioPolitica ServicioPolitica;
    @Autowired
    @Lazy
    private ServicioArea ServicioArea;
    public ActividadDTO insertar(ActividadDTO Actividad) {
       return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad)));
    }
    public ActividadDTO modificar(ActividadDTO Actividad) {
         return this.mapToDTO(ActividadDAO.save(this.mapToEntity(Actividad)));
    }
    public void eliminar(ActividadDTO Actividad) {
        ActividadDAO.delete(this.mapToEntity(Actividad));
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
    @Override
    public List<Actividad> buscarPorEje(Eje eje) {
        return eje.getObjetivos().stream().map(Objetivo::getPoliticas).map(lista -> lista.stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get()).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    @Override
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        return secretaria.getPoliticas().stream().map(Politica::getActividades).reduce((a, b) -> {
            a.addAll(b);
            return a;
        }).get();
    }
    @Override
    public List<Actividad> buscarTodos() {
        return ActividadDAO.findAll();
    }
    @Override
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
    public final Actividad mapToEntity(ActividadDTO dto){
        Actividad actividad = new Actividad();
        actividad.setId(dto.getId());
        actividad.setNombre(dto.getNombre());
        actividad.setDescripcion(dto.getDescripcion());
        actividad.setFecha_inicio(dto.getFechaInicio());
        actividad.setFecha_fin(dto.getFechaFin());
        actividad.setParticipacion_ciudadana(dto.getParticipacion_ciudadana());
        actividad.setResultado_esperado(dto.getResultado_esperado());
        actividad.setPolitica(ServicioPolitica.buscarPorId(dto.getPolitica_id()));
        actividad.setArea(ServicioArea.buscarPorId(dto.getArea_id()));
        return actividad;
    }
}
