package gantt.proyecto.Controladores;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import gantt.proyecto.DTOS.*;
import gantt.proyecto.Modelo.Politica;
import gantt.proyecto.Servicios.Implemenaciones.*;
@Controller
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping("/items")
public class ItemController {
    @Autowired
    private ServicioItem servicioItem;
    @Autowired
    private ServicioPolitica servicioPolitica;
    @Autowired
    private ServicioArea servicioArea;
    @Autowired
    private ServicioActividad servicioActividad;
    @GetMapping
    public ResponseEntity<List<ItemDTO>> getItems(){
        return ResponseEntity.ok().body(servicioItem.buscarTodo().stream().map(x -> servicioItem.mapToDTO(x, servicioActividad, servicioArea)).collect(Collectors.toList()));
    }
    @PostMapping
    public ResponseEntity<ItemDTO> createItem(@RequestBody PoliticaDTO politica, @RequestBody ItemDTO item){
        Politica politicaCargada = servicioPolitica.buscarPorId(politica.getId()).get();
        return ResponseEntity.ok().body(servicioItem.insertar(item, politicaCargada, servicioActividad, servicioArea));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteItem(@RequestBody ItemDTO item){
        servicioItem.eliminar(servicioItem.mapToEntity(item, servicioPolitica.buscarPorId(item.getPolitica_id()).get(), servicioActividad, servicioArea));
        return ResponseEntity.ok().build();
    }
    @PostMapping("/modificar")
    public ResponseEntity<ItemDTO> modificarItem(@RequestBody ItemDTO item){
        Politica politica = servicioPolitica.buscarPorId(item.getPolitica_id()).get();
        return ResponseEntity.ok().body(servicioItem.modificar(item, politica, servicioActividad, servicioArea));
    }
    @GetMapping("{politica_id}/{item_id}")
    public ResponseEntity<ItemDTO> getItem(@PathVariable(value = "item_id") long id, @PathVariable(value = "politica_id") long politica){
        return ResponseEntity.ok().body(servicioItem.mapToDTO(
            servicioItem.buscarPorId(
                id, 
                servicioPolitica.buscarPorId(politica).get()), servicioActividad, servicioArea)
                )
                    ;
    }
}
