package gantt.proyecto.Repositorios.DAOS;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gantt.proyecto.IDclasses.MetaId;
import gantt.proyecto.Modelo.Meta;
import gantt.proyecto.Modelo.Politica;

@Repository
public interface MetaDAO extends JpaRepository<Meta, MetaId>{
    @SuppressWarnings("null")
    Optional<Meta> findById(MetaId id);
    List<Meta> findByPolitica(Politica politica);
}
