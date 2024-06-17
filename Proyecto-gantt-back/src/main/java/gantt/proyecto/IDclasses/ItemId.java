package gantt.proyecto.IDclasses;

import java.io.Serializable;
import java.util.Objects;

import gantt.proyecto.Modelo.Politica;
import io.micrometer.common.lang.NonNull;

public class ItemId implements Serializable {
    @NonNull
    private Long item_id;
    @NonNull
    private Politica politica;

    public ItemId() {
    }

    public ItemId(Long item_id, Politica politica) {
        this.item_id = item_id;
        this.politica = politica;
    }

    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
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
        ItemId itemId = (ItemId) o;
        return Objects.equals(item_id, itemId.item_id) &&
               Objects.equals(politica, itemId.politica);
    }

    @Override
    public int hashCode() {
        return Objects.hash(item_id, politica);
    }
}
