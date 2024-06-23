package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.Repositorios.DAOS.AreaDAO;


import gantt.proyecto.DTOS.AreaDTO;
import gantt.proyecto.Modelo.*;
@Service
public class ServicioArea{
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
    public Area buscarPorNombre(String nombre) {
        return AreaDAO.findByNombre(nombre);
    }
    public List<Area> buscarTodo() {
        return AreaDAO.findAll();
    }
    public AreaDTO modificarColor(long id, String color) {
        Area entity = AreaDAO.findById(id).get();
        entity.setColor(color);
        return this.mapToDTO(AreaDAO.save(entity));
    }
  public AreaDTO mapToDTO(Area obj) {
        AreaDTO dto = new AreaDTO();
        dto.setId(obj.getid());
        dto.setNombre(obj.getNombre());
        dto.setColor(obj.getColor());
        
        return dto;
    }
    public Area mapToEntity(AreaDTO obj) {
        Area entity = new Area();
        entity.setNombre(obj.getNombre());
        entity.setColor(obj.getColor());
        return entity;
    }

}
