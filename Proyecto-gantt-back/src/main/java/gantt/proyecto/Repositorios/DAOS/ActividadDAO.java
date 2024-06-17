package gantt.proyecto.Repositorios.DAOS;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gantt.proyecto.Modelo.*;


@Repository
public interface ActividadDAO extends JpaRepository<Actividad, Long>{
    @SuppressWarnings("null")
    Optional<Actividad> findById(Long id);
    List<Actividad> findByNombre(String nombre);
    List<Actividad> findByArea(Area area);
    List<Actividad> findByItem(Item item);
}