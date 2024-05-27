package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EjeDAO extends JpaRepository<Eje, Long>{
    @SuppressWarnings("null")
    Optional<Eje> findById(Long id);
    Eje findByNombre(String nombre);
    
}
    

