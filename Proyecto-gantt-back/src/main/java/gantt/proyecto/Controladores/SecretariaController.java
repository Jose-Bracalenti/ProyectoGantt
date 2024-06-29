package gantt.proyecto.Controladores;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


import gantt.proyecto.DTOS.SecretariaDTO;

import gantt.proyecto.Servicios.Implemenaciones.ServicioSecretaria;

@RestController
@CrossOrigin(origins = "http://localhost:5174")

@RequestMapping("/secretarias")
public class SecretariaController {
    @Autowired
    private ServicioSecretaria servicioSecretaria;
    @PostMapping
    public ResponseEntity<SecretariaDTO> createSecretaria(@RequestBody SecretariaDTO secretaria){
        return ResponseEntity.ok().body(servicioSecretaria.insertar(secretaria));
    }
    @GetMapping
    public ResponseEntity<List<SecretariaDTO>> getSecretaria(){
        return ResponseEntity.ok().body(servicioSecretaria.buscarTodo().stream().map(x -> servicioSecretaria.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{secretaria_id}")
    public ResponseEntity<SecretariaDTO> getSecretaria(@PathVariable (value = "secretaria_id") long id){
        return ResponseEntity.ok().body(servicioSecretaria.mapToDTO(servicioSecretaria.buscarPorId(id)));
    }
    @PostMapping("/modificar")
    public ResponseEntity<SecretariaDTO> modificarSecretaria(@RequestBody SecretariaDTO secretaria){
        return ResponseEntity.ok().body(servicioSecretaria.modificar(secretaria));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteSecretaria(@RequestBody SecretariaDTO secretaria){
        servicioSecretaria.eliminar(secretaria);
        return ResponseEntity.ok().build();
    }
}
