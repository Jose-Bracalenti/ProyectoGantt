package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PoliticaDAO extends JpaRepository<Politica, Long>{
    @SuppressWarnings("null")
    Optional<Politica> findById(Long id);
    List<Politica> findByNombre(String nombre);
}
