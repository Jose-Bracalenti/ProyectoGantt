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

import gantt.proyecto.Modelo.Actividad;
import gantt.proyecto.Servicios.Implemenaciones.ServicioActividad;


@RestController
@RequestMapping("/actividad")
public class ActividadesController {
    @Autowired
    private ServicioActividad servicioActividad;
    @PostMapping
    public ResponseEntity<Actividad> createActividad(@RequestBody Actividad actividad){
        return ResponseEntity.ok().body(servicioActividad.insertar(actividad));
    }
    @GetMapping("{actividad_id}")
    public ResponseEntity<Actividad> getActividad(@PathVariable(value = "actividad_id") long id){
        return ResponseEntity.ok().body(servicioActividad.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteActividad(@RequestBody Actividad actividad){
        servicioActividad.eliminar(actividad);
        return ResponseEntity.ok().build();
    }

    
}
