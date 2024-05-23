package gantt.proyecto.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gantt.proyecto.Modelo.Area;
import gantt.proyecto.Servicios.Implemenaciones.ServicioArea;

@RestController
@RequestMapping("/areas")
public class AreasController {
    @Autowired
    private ServicioArea servicioArea;
    @PostMapping
    public ResponseEntity<Area> createArea(@RequestBody Area Area){
        return ResponseEntity.ok().body(servicioArea.insertar(Area));
    }
    @GetMapping
    public ResponseEntity<List<Area>> getAreas(){
        return ResponseEntity.ok().body(servicioArea.buscarTodo());
    }
    @GetMapping("{Area_id}")
    public ResponseEntity<Area> getArea(@PathVariable(value = "Area_id") long id){
        return ResponseEntity.ok().body(servicioArea.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteArea(@RequestBody Area Area){
        servicioArea.eliminar(Area);
        return ResponseEntity.ok().build();
    }
}