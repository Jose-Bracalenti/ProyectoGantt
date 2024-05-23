package gantt.proyecto.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import gantt.proyecto.Modelo.Secretaria;
import gantt.proyecto.Servicios.Implemenaciones.ServicioSecretaria;

@RestController
@RequestMapping("/secretaria")
public class SecretariaController {
    @Autowired
    private ServicioSecretaria servicioSecretaria;
    @PostMapping
    public ResponseEntity<Secretaria> createSecretaria(@RequestBody Secretaria secretaria){
        return ResponseEntity.ok().body(servicioSecretaria.insertar(secretaria));
    }
    @GetMapping
    public ResponseEntity<List<Secretaria>> getSecretaria(){
        return ResponseEntity.ok().body(servicioSecretaria.buscarTodo());
    }
    @GetMapping("{secretaria_id}")
    public ResponseEntity<Secretaria> getSecretaria(@PathVariable (value = "secretaria_id") long id){
        return ResponseEntity.ok().body(servicioSecretaria.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteSecretaria(@RequestBody Secretaria secretaria){
        servicioSecretaria.eliminar(secretaria);
        return ResponseEntity.ok().build();
    }
}
