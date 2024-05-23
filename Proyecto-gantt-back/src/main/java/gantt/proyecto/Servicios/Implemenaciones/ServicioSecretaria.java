package gantt.proyecto.Servicios.Implemenaciones;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.SecretariaDTO;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.SecretariaDAO;
import gantt.proyecto.Servicios.Interfaces.ServicioSecretariaInterface;
import jakarta.transaction.Transactional;
@Service
@Transactional(rollbackOn = {Exception.class})
public class ServicioSecretaria implements ServicioSecretariaInterface{
    @Autowired
    private SecretariaDAO secretariaDAO;
    @Autowired
    private ServicioPolitica ServicioPolitica;
    public SecretariaDTO insertar(SecretariaDTO secretaria) {
       return this.mapToDTO(secretariaDAO.save(this.mapToEntity(secretaria)));
    }
    public SecretariaDTO modificar(SecretariaDTO obj) {
        return this.mapToDTO(secretariaDAO.save(this.mapToEntity(obj)));
    }
    public void eliminar(SecretariaDTO obj) {
        secretariaDAO.delete(this.mapToEntity(obj));
    }
    public Secretaria buscarPorId(long id) {
        return secretariaDAO.findById(id).get();
    }
    public List<Secretaria> buscarPorNombre(String nombre) {
        return secretariaDAO.findByNombre(nombre);
    }
    public List<Secretaria> buscarTodo() {
        return secretariaDAO.findAll();
    }
    public SecretariaDTO mapToDTO(Secretaria secretaria){
        SecretariaDTO dto = new SecretariaDTO();
        dto.setId(secretaria.getid());
        dto.setNombre(secretaria.getNombre());
        dto.setPoliticas(secretaria.getPoliticas().stream().map(x -> ServicioPolitica.mapToDTO(x)).collect(Collectors.toList()));
        return dto;
    }
    public Secretaria mapToEntity(SecretariaDTO obj) {
        Secretaria entity = new Secretaria();
        entity.setid(obj.getId());
        entity.setNombre(obj.getNombre());
        entity.setPoliticas(obj.getPoliticas().stream().map(x -> ServicioPolitica.mapToEntity(x)).collect(Collectors.toList()));
        return entity;
    }
}
