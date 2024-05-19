package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.Interfaces.DAOinterface;
import jakarta.persistence.EntityManager;
import java.util.List;
public class EjeDAO implements DAOinterface<Eje>{
    public void insertar(Eje obj) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            em.getTransaction().begin();
            em.persist(obj);
            em.getTransaction().commit();
            em.close();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    public void modificar(Eje obj) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            em.getTransaction().begin();
            em.merge(obj);
            em.getTransaction().commit();
            em.close();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    public void eliminar(Eje obj) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            em.getTransaction().begin();
            em.remove(obj);
            em.getTransaction().commit();
            em.close();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    public Eje buscarPorId(long id) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Eje.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    public List<Eje> buscarTodos() {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Eje", Eje.class).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    public List<Eje> buscarPorNombre(String nombre) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Eje where nombre = :nombre", Eje.class).setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Eje> buscarPorEje(Eje eje) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorEje'");
    }
    @Override
    public List<Eje> buscarPorSecretaria(Secretaria secretaria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorSecretaria'");
    }
    
}
