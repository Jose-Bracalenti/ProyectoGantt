package gantt.proyecto.Controladores;
import gantt.proyecto.DTOS.PoliticaDTO;
import gantt.proyecto.Modelo.Politica;
import gantt.proyecto.Servicios.Implemenaciones.ServicioPolitica;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/politica")
public class PoliticaController {
    @Autowired
    private ServicioPolitica servicioPolitica;
    @PostMapping 
    public ResponseEntity<PoliticaDTO> createPolitica(PoliticaDTO politica){
        return ResponseEntity.ok().body(servicioPolitica.insertar(politica));
    }
    @GetMapping
    public ResponseEntity<List<PoliticaDTO>> getPoliticas(){
        return ResponseEntity.ok().body(servicioPolitica.buscarTodo().stream().map(x -> servicioPolitica.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{politica_id}")
    public ResponseEntity<Politica> getPolitica(@PathVariable(value = "politica_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deletePolitica(@RequestBody PoliticaDTO politica){
        servicioPolitica.eliminar(politica);
        return ResponseEntity.ok().build();
    }
}
