package gantt.proyecto.Servicios.Implemenaciones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gantt.proyecto.DTOS.MetaDTO;
import gantt.proyecto.IDclasses.MetaId;
import gantt.proyecto.Modelo.Meta;
import gantt.proyecto.Modelo.Politica;
import gantt.proyecto.Modelo.estado;
import gantt.proyecto.Repositorios.DAOS.MetaDAO;

@Service
public class ServicioMeta {
    @Autowired
    private MetaDAO metaDAO;
    public MetaDTO insertar(MetaDTO meta, ServicioPolitica servicioPolitica) {
        return this.mapToDTO(metaDAO.save(this.mapToEntity(meta, servicioPolitica)));
    }
    public Meta buscarPorId(long id, Politica politica) {
        MetaId meta_id = new MetaId();
        meta_id.setmeta_id(id);;
        meta_id.setPolitica(politica);;
        return metaDAO.findById(meta_id).get();
    }
    public List<Meta> buscarPorPolitica(Politica politica) {
        return metaDAO.findByPolitica(politica);
    }
    public Meta mapToEntity(MetaDTO dto, ServicioPolitica servicioPolitica){
        Meta meta = new Meta();
        meta.setNombre(dto.getNombre());
        meta.setPolitica(servicioPolitica.buscarPorId(dto.getPolitica_id()).get());
        meta.setValor(dto.getValor());
        meta.setUnidad(dto.getUnidad());
        meta.setEstado(estado.valueOf(dto.getEstado()));
        return meta;
    }
    public MetaDTO mapToDTO(Meta meta){
        MetaDTO dto = new MetaDTO();
        dto.setMeta_id(meta.getMeta_id());
        dto.setPolitica_id(meta.getPolitica().getPolitica_id());
        dto.setNombre(meta.getNombre());
        dto.setValor(meta.getValor());
        dto.setUnidad(meta.getUnidad());
        dto.setEstado(meta.getEstado().toString());
        return dto;
    }
}
