package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import gantt.proyecto.Repositorios.DAOS.EjeDAO;
import gantt.proyecto.DTOS.EjeDTO;
import gantt.proyecto.Modelo.*;
@Service
public class ServicioEje{
    @Autowired
    private EjeDAO EjeDAO;
    public EjeDTO insertar(EjeDTO Eje) {
         return this.mapToDTO(EjeDAO.save(this.mapToEntity(Eje)));
    }
    public EjeDTO modificar(EjeDTO obj) {
            return this.mapToDTO(EjeDAO.save(this.mapToEntity(obj)));
    }
    public void eliminar(EjeDTO obj) {
        EjeDAO.delete(this.mapToEntity(obj));
    }
    public Optional<Eje> buscarPorId(long id) {
        return EjeDAO.findById(id);
    }
    public Eje buscarPorNombre(String nombre) {
        return EjeDAO.findByNombre(nombre);
    }
    public List<Eje> buscarTodo() {
        return EjeDAO.findAll();
    }
    public final EjeDTO mapToDTO(Eje eje){
        EjeDTO dto = new EjeDTO();
        dto.setId(eje.getid());
        dto.setNombre(eje.getNombre());
        dto.setDescripcion(eje.getDescripcion());
        return dto;
    }
    public final Eje mapToEntity(EjeDTO dto){
        Eje eje = new Eje();
        eje.setNombre(dto.getNombre());
        eje.setDescripcion(dto.getDescripcion());
        return eje;
    }
}
