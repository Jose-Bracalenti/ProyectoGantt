package gantt.proyecto.Controladores;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gantt.proyecto.DTOS.EjeDTO;
import gantt.proyecto.Modelo.Eje;
import gantt.proyecto.Servicios.Implemenaciones.*;

@RestController
@RequestMapping("/ejes")
public class EjesController {
    @Autowired
    private ServicioEje servicioEje;
    @PostMapping
    public ResponseEntity<EjeDTO> createEje(@RequestBody EjeDTO Eje){
        return ResponseEntity.ok().body(servicioEje.insertar(Eje));
    }
    @GetMapping
    public ResponseEntity<List<EjeDTO>> getEjes(){
        return ResponseEntity.ok().body(servicioEje.buscarTodo().stream().map(x -> servicioEje.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{Eje_id}")
    public ResponseEntity<Eje> getEje(@PathVariable(value = "Eje_id") long id){
        return ResponseEntity.ok().body(servicioEje.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteEje(@RequestBody EjeDTO Eje){
        servicioEje.eliminar(Eje);
        return ResponseEntity.ok().build();
    }
}
