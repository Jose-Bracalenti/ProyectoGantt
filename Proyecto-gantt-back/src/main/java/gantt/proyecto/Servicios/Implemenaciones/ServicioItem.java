package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gantt.proyecto.DTOS.*;
import gantt.proyecto.IDclasses.ItemId;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.DAOS.ItemDAO;
@Service
public class ServicioItem {
    @Autowired
    private ItemDAO itemDAO;
    public ItemDTO insertar(ItemDTO item, ServicioPolitica servicioPolitica, ServicioActividad servicioActividad, ServicioArea servicioArea) {
        return this.mapToDTO(itemDAO.save(this.mapToEntity(item, servicioPolitica.buscarPorId(item.getPolitica_id()).get(), servicioActividad, servicioArea)), servicioActividad, servicioArea);
    }
    public Item buscarPorId(long id, Politica politica) {
        ItemId item_id = new ItemId();
        item_id.setItem_id(id);
        item_id.setPolitica(politica);
        return itemDAO.findById(item_id).get();
    }
    public List<Item> buscarPorNombre(String nombre) {
        return itemDAO.findByNombre(nombre);
    }
    public List<Item> buscarPorPolitica(Politica politica) {
        return itemDAO.findByPolitica(politica);
    }
    public List<Item> buscarTodo() {
        return itemDAO.findAll();
    }
    public void eliminar(Item item) {
        itemDAO.delete(item);
    }

    public final ItemDTO mapToDTO(Item item, ServicioActividad servicioActividad, ServicioArea servicioArea){
        ItemDTO dto = new ItemDTO();
        dto.setId(item.getItem_id());
        dto.setNombre(item.getNombre());
        dto.setPolitica(item.getPolitica().getNombre());
        dto.setPolitica_id(item.getPolitica().getPolitica_id());
        dto.setActividades(item.getActividades().stream().map(x -> servicioActividad.mapToDTO(x, servicioArea)).collect(Collectors.toList()));
        return dto;
    }
    public final Item mapToEntity(ItemDTO dto, Politica politica, ServicioActividad servicioActividad, ServicioArea servicioArea){
        Item item = new Item();
        item.setNombre(dto.getNombre());
        item.setPolitica(politica);
        item.setActividades(dto.getActividades().stream().map(x -> servicioActividad.mapToEntity(x, item, servicioArea)).collect(Collectors.toList()));
        return item;
    }

}
