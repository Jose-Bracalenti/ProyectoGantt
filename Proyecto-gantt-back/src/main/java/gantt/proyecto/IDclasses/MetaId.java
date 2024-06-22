package gantt.proyecto.IDclasses;

import java.io.Serializable;
import java.util.Objects;

import gantt.proyecto.Modelo.Politica;
import io.micrometer.common.lang.NonNull;

public class MetaId implements Serializable {
    @NonNull
    private Long meta_id;
    @NonNull
    private Politica politica;

    public MetaId() {
    }

    public MetaId(Long meta_id, Politica politica) {
        this.meta_id = meta_id;
        this.politica = politica;
    }

    public Long getmeta_id() {
        return meta_id;
    }

    public void setmeta_id(Long meta_id) {
        this.meta_id = meta_id;
    }

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MetaId metaId = (MetaId) o;
        return Objects.equals(meta_id, metaId.meta_id) &&
               Objects.equals(politica, metaId.politica);
    }

    @Override
    public int hashCode() {
        return Objects.hash(meta_id, politica);
    }
}
