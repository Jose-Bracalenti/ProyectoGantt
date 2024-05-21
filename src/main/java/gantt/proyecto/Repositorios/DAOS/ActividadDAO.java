package gantt.proyecto.Repositorios.DAOS;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gantt.proyecto.Modelo.*;


@Repository
public interface ActividadDAO extends JpaRepository<Actividad, Long>{
    Optional<Actividad> findById(Long id);
    List<Actividad> findByNombre(String nombre);
}