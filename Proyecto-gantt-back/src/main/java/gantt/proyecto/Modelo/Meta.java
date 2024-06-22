package gantt.proyecto.Modelo;

import gantt.proyecto.IDclasses.MetaId;
import jakarta.persistence.Column;
import jakarta.persistence.ConstraintMode;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
@IdClass(MetaId.class)
@Entity
@Table(name = "meta")
public class Meta {
    @Id
    @SequenceGenerator(name="meta_id", sequenceName="meta_seq", allocationSize=1)
    @GeneratedValue(generator = "meta_id")
    private Long meta_id;
    @Id
    @ManyToOne
    @JoinColumn(name = "politica_id", referencedColumnName = "politica_id", nullable = false, foreignKey = @ForeignKey(name = "FK_META_POLITICA", value = ConstraintMode.CONSTRAINT))
    private Politica politica;
    @Column
    private String nombre;
    @Column
    private float valor;
    @Column
    private String unidad;
    @Column
    private estado estado;
    public Meta() {
    }
    
    public Meta(Politica politica, String nombre, float valor, String unidad, estado estado) {
        this.politica = politica;
        this.nombre = nombre;
        this.valor = valor;
        this.unidad = unidad;
        this.estado = estado;
    }

    public Long getMeta_id() {
        return meta_id;
    }
    public void setMeta_id(Long meta_id) {
        this.meta_id = meta_id;
    }
    public Politica getPolitica() {
        return politica;
    }
    public void setPolitica(Politica politica) {
        this.politica = politica;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public float getValor() {
        return valor;
    }
    public void setValor(float valor) {
        this.valor = valor;
    }
    public String getUnidad() {
        return unidad;
    }
    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }
    public estado getEstado() {
        return estado;
    }
    public void setEstado(estado estado) {
        this.estado = estado;
    }
    
}
