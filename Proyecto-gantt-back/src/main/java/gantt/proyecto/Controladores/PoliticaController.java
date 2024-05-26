package gantt.proyecto.Controladores;
import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.DTOS.PoliticaDTO;
import gantt.proyecto.Servicios.Implemenaciones.ServicioActividad;
import gantt.proyecto.Servicios.Implemenaciones.ServicioPolitica;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/politicas")
public class PoliticaController {
    @Autowired
    private ServicioPolitica servicioPolitica;
    @Autowired
    private ServicioActividad servicioActividad;
    @PostMapping 
    public ResponseEntity<PoliticaDTO> createPolitica(@RequestBody PoliticaDTO politica){
        List<ActividadDTO> actividades[] = politica.getActividades();
        ResponseEntity.ok().body(servicioPolitica.insertar(politica));
        for (ActividadDTO actividad : actividades) {
            servicioActividad.insertar(actividad);
        }
        return ResponseEntity.ok().body(politica);
    }
    @GetMapping
    public ResponseEntity<List<PoliticaDTO>> getPoliticas(){
        return ResponseEntity.ok().body(servicioPolitica.buscarTodo().stream().map(x -> servicioPolitica.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{politica_id}")
    public ResponseEntity<PoliticaDTO> getPolitica(@PathVariable(value = "politica_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.mapToDTO(servicioPolitica.buscarPorId(id)));
    }
    @DeleteMapping
    public ResponseEntity<Void> deletePolitica(@RequestBody PoliticaDTO politica){
        servicioPolitica.eliminar(politica);
        return ResponseEntity.ok().build();
    }
}
