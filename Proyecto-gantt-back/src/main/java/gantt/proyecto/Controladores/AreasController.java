package gantt.proyecto.Controladores;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gantt.proyecto.DTOS.AreaDTO;

import gantt.proyecto.Servicios.Implemenaciones.ServicioArea;

@RestController
@RequestMapping("/areas")
@CrossOrigin(origins = "http://localhost:5173")
public class AreasController {
    @Autowired
    private ServicioArea servicioArea;
    @PostMapping
    public ResponseEntity<AreaDTO> createArea(@RequestBody AreaDTO Area){
        return ResponseEntity.ok().body(servicioArea.insertar(Area));
    }
    @GetMapping
    public ResponseEntity<List<AreaDTO>> getAreas(){
        return ResponseEntity.ok().body(servicioArea.buscarTodo().stream().map(x -> servicioArea.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{Area_id}")
    public ResponseEntity<AreaDTO> getArea(@PathVariable(value = "Area_id") long id){
        return ResponseEntity.ok().body(servicioArea.mapToDTO(servicioArea.buscarPorId(id)));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteArea(@RequestBody AreaDTO Area){
        servicioArea.eliminar(Area);
        return ResponseEntity.ok().build();
    }
}
