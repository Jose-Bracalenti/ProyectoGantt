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

import gantt.proyecto.DTOS.ActividadDTO;
import gantt.proyecto.Modelo.Politica;
import gantt.proyecto.Servicios.Implemenaciones.*;



@RestController
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping("/actividades")
public class ActividadesController {
    @Autowired
    private ServicioActividad servicioActividad;
    @Autowired
    private ServicioPolitica servicioPolitica;
    @Autowired
    private ServicioArea servicioArea;

    @PostMapping
    public ResponseEntity<ActividadDTO> createActividad(@RequestBody ActividadDTO actividad){
        Politica politica = new Politica();
        politica = servicioPolitica.buscarPorId(actividad.getPolitica_id()).get();
        System.out.println(politica.getNombre());
        return ResponseEntity.ok().body(servicioActividad.insertar(actividad, politica, servicioArea));
    }
    @GetMapping
    public ResponseEntity<List<ActividadDTO>> getActividades(){
        return ResponseEntity.ok().body(servicioActividad.buscarTodos().stream().map(x -> servicioActividad.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("{actividad_id}")
    public ResponseEntity<ActividadDTO> getActividad(@PathVariable(value = "actividad_id") long id){
        return ResponseEntity.ok().body(servicioActividad.mapToDTO(servicioActividad.buscarPorId(id)));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteActividad(@RequestBody ActividadDTO actividad){
        Politica politica = new Politica();
        politica = servicioPolitica.buscarPorId(actividad.getPolitica_id()).get();
        servicioActividad.eliminar(actividad, politica, servicioArea);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/politica/{politica_id}")
    public ResponseEntity<List<ActividadDTO>> getActividadesPorPolitica(@PathVariable(value = "politica_id") long id){
        return ResponseEntity.ok().body(servicioActividad.buscarPorPolitica(id, servicioPolitica).stream().map(x -> servicioActividad.mapToDTO(x)).collect(Collectors.toList()));
    }
    @GetMapping("/area/{area_id}")
    public ResponseEntity<List<ActividadDTO>> getActividadesPorArea(@PathVariable(value = "area_id") long id){
        return ResponseEntity.ok().body(servicioActividad.buscarPorArea(id, servicioArea).stream().map(x -> servicioActividad.mapToDTO(x)).collect(Collectors.toList()));
    }
    
}
