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

import gantt.proyecto.Modelo.Objetivo;
import gantt.proyecto.Servicios.Implemenaciones.ServicioObjetivo;

@RestController
@RequestMapping("/objetivos")
public class ObjetivosController {
    @Autowired
    private ServicioObjetivo servicioObjetivo;
    @PostMapping
    public ResponseEntity<Objetivo> createObjetivo(@RequestBody Objetivo Objetivo){
        return ResponseEntity.ok().body(servicioObjetivo.insertar(Objetivo));
    }
    @GetMapping
    public ResponseEntity<List<Objetivo>> getObjetivos(){
        return ResponseEntity.ok().body(servicioObjetivo.buscarTodo());
    }
    @GetMapping("{Objetivo_id}")
    public ResponseEntity<Objetivo> getObjetivo(@PathVariable(value = "Objetivo_id") long id){
        return ResponseEntity.ok().body(servicioObjetivo.buscarPorId(id));
    }
    @DeleteMapping
    public ResponseEntity<Void> deleteObjetivo(@RequestBody Objetivo Objetivo){
        servicioObjetivo.eliminar(Objetivo);
        return ResponseEntity.ok().build();
    }
}
