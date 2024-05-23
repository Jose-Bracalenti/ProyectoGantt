package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Repositorios.DAOS.AreaDAO;

import gantt.proyecto.Servicios.Interfaces.ServicioAreaInterface;
import gantt.proyecto.DTOS.AreaDTO;
import gantt.proyecto.Modelo.*;
@Service
public class ServicioArea implements ServicioAreaInterface{
   @Autowired
    private AreaDAO AreaDAO;
    public AreaDTO insertar(AreaDTO Area) {
       return this.mapToDTO(AreaDAO.save(this.mapToEntity(Area)));
    }
    public AreaDTO modificar(AreaDTO obj) {
         return this.mapToDTO(AreaDAO.save(this.mapToEntity(obj)));
    }
    public void eliminar(AreaDTO obj) {
        AreaDAO.delete(this.mapToEntity(obj));
    }
    public Area buscarPorId(long id) {
        return AreaDAO.findById(id).get();
    }
    public List<Area> buscarPorNombre(String nombre) {
        return AreaDAO.findByNombre(nombre);
    }
    public List<Area> buscarTodo() {
        return AreaDAO.findAll();
    }
  public final AreaDTO mapToDTO(Area area){
        AreaDTO dto = new AreaDTO();
        dto.setId(area.getid());
        dto.setNombre(area.getNombre());
        return dto;
    }
    public final Area mapToEntity(AreaDTO dto){
        Area area = new Area();
        area.setid(dto.getId());
        area.setNombre(dto.getNombre());
        return area;
    }

}
