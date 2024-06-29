package gantt.proyecto.Controladores;
import gantt.proyecto.DTOS.*;
import gantt.proyecto.DTOS.SecretariaDTO;
import gantt.proyecto.Servicios.Implemenaciones.*;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping("/politicas")
public class PoliticaController {
    @Autowired
    private ServicioPolitica servicioPolitica;
    @Autowired
    private ServicioItem servicioItem;
    @Autowired
    private ServicioObjetivo servicioObjetivo;
    @Autowired
    private ServicioSecretaria servicioSecretaria;
    @Autowired
    private ServicioEje servicioEje;
    @Autowired
    private ServicioArea servicioArea;
    @Autowired
    private ServicioActividad servicioActividad;
    @PostMapping 
    public ResponseEntity<PoliticaDTO> createPolitica(@RequestBody PoliticaDTO politica){     
        
        return ResponseEntity.ok().body(servicioPolitica.insertar(politica, servicioObjetivo, servicioSecretaria, servicioItem, servicioArea, servicioActividad));
    }
    @GetMapping
    public ResponseEntity<List<PoliticaDTO>> getPoliticas(){
        return ResponseEntity.ok().body(servicioPolitica.buscarTodo().stream().map(x -> servicioPolitica.mapToDTO(x, servicioItem, servicioArea, servicioActividad)).collect(Collectors.toList()));
    }
    @GetMapping("{politica_id}")
    public ResponseEntity<PoliticaDTO> getPolitica(@PathVariable(value = "politica_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.mapToDTO(servicioPolitica.buscarPorId(id).get(), servicioItem, servicioArea, servicioActividad));
    }
    @DeleteMapping
    public ResponseEntity<Void> deletePolitica(@RequestBody PoliticaDTO politica){
        servicioPolitica.eliminar(politica, servicioObjetivo, servicioSecretaria, servicioItem, servicioArea, servicioActividad);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/objetivo/{objetivo_id}")
    public ResponseEntity<List<PoliticaDTO>> getPoliticasPorObjetivo(@PathVariable(value = "objetivo_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.buscarPorObjetivo(id, servicioObjetivo).stream().map(x -> servicioPolitica.mapToDTO(x, servicioItem, servicioArea, servicioActividad)).collect(Collectors.toList()));
    }
    @GetMapping("/secretaria/{secretaria_id}")
    public ResponseEntity<List<PoliticaDTO>> getPoliticasPorSecretaria(@PathVariable(value = "secretaria_id") long id){
        return ResponseEntity.ok().body(servicioPolitica.buscarPorSecretaria(id, servicioSecretaria).stream().map(x -> servicioPolitica.mapToDTO(x, servicioItem,servicioArea,servicioActividad)).collect(Collectors.toList()));
    }
    @PostMapping
    public ResponseEntity<PoliticaDTO> modificarPolitica(@RequestBody PoliticaDTO politica){
        return ResponseEntity.ok().body(servicioPolitica.modificar(politica, servicioObjetivo, servicioSecretaria, servicioItem, servicioArea, servicioActividad));
    }
    @PostMapping("/filtro")
    public ResponseEntity<List<PoliticaDTO>> getPoliticasPorFiltro(@RequestBody FiltroDTO filtro){
        return ResponseEntity.ok().body(
            servicioPolitica.buscarPorFiltro(
                filtro,
                servicioObjetivo, 
                servicioSecretaria, 
                servicioArea, 
                servicioPolitica, 
                servicioActividad, 
                servicioEje).stream().map(x -> servicioPolitica.mapToDTO(x, servicioItem, servicioArea, servicioActividad)).collect(Collectors.toList()));
    }
}
