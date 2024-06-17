package gantt.proyecto.Repositorios.DAOS;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import gantt.proyecto.Modelo.*;

import gantt.proyecto.IDclasses.ItemId;

public interface ItemDAO extends JpaRepository<Item, ItemId> {
    Optional<Item> findById(ItemId id);
    List<Item> findByNombre(String nombre);
    List<Item> findByPolitica(Politica politica);
}
