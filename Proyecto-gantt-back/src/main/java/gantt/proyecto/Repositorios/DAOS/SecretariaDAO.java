package gantt.proyecto.Repositorios.DAOS;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gantt.proyecto.Modelo.*;

@Repository

public interface SecretariaDAO extends JpaRepository<Secretaria, Long>{
    @SuppressWarnings("null")
    Optional<Secretaria> findById(Long id);    
    List<Secretaria> findByNombre(String nombre);
}