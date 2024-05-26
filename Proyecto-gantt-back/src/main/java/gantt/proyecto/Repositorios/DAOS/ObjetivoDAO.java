package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ObjetivoDAO extends JpaRepository<Objetivo, Long>{
    @SuppressWarnings("null")
    Optional<Objetivo> findById(Long id);
    List<Objetivo> findByNombre(String nombre);
    List<Objetivo> findByEje(Eje eje);
    
}
