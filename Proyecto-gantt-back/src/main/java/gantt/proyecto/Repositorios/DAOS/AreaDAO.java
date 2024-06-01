package gantt.proyecto.Repositorios.DAOS;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gantt.proyecto.Modelo.*;

@Repository
public interface AreaDAO extends JpaRepository<Area, Long>{
    @SuppressWarnings("null")
    Optional<Area> findById(Long id);
    List<Area> findByNombre(String nombre);

}