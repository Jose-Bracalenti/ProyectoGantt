package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.Interfaces.*;
import jakarta.persistence.EntityManager;
import java.util.List;
public class PoliticaDAO implements DAOinterface<Politica>{
    public void insertar(Politica obj) {
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
    public void modificar(Politica obj) {
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
    public void eliminar(Politica obj) {
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
    public Politica buscarPorId(long id) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Politica.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Politica> buscarTodos() {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Politica").getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Politica> buscarPorNombre(String nombre) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Politica where nombre = :nombre").setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }  
    }
    @SuppressWarnings("unchecked")
    public List<Politica> buscarPorEje(Eje eje) {
        // TODO Auto-generated method stub
        List<Politica> politicas = null;
        politicas = eje.getObjetivos().stream().map(Objetivo::getPoliticas).flatMap(List::stream).toList();
        return politicas;
    }
    @Override
    @SuppressWarnings("unchecked")
    public List<Politica> buscarPorSecretaria(Secretaria secretaria) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Politica where secretaria_id = :id").setParameter("id", secretaria.getid()).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
}
