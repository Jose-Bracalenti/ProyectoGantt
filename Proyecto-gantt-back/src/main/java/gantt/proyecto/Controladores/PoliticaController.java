package gantt.proyecto.Controladores;
import gantt.proyecto.Modelo.Politica;
import gantt.proyecto.Servicios.Implemenaciones.ServicioPolitica;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/politica")
public class PoliticaController {
    @Autowired
    private ServicioPolitica servicioPolitica;
    @PostMapping 
    public ResponseEntity<Politica> createPolitica(Politica politica){
        return ResponseEntity.ok().body(servicioPolitica.insertar(politica));
    }
    @GetMapping
    public ResponseEntity<List<Politica>> getPoliticas(){
        return ResponseEntity.ok().body(servicioPolitica.buscarTodo());
    }
    @GetMapping("{politica_id}")
    public ResponseEntity<Politica> getPolitica(@PathVariable(value = "politica_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deletePolitica(@RequestBody Politica politica){
        servicioPolitica.eliminar(politica);
        return ResponseEntity.ok().build();
    }
}
