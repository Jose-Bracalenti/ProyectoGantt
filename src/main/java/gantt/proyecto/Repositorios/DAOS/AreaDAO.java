package gantt.proyecto.Repositorios.DAOS;

import java.util.List;

import gantt.proyecto.Modelo.Area;
import gantt.proyecto.Modelo.Eje;
import gantt.proyecto.Modelo.Secretaria;
import gantt.proyecto.Repositorios.Interfaces.DAOinterface;
import jakarta.persistence.EntityManager;
public class AreaDAO implements DAOinterface<Area>{
    public void insertar(Area obj) {
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
    public void modificar(Area obj) {
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
    public void eliminar(Area obj) {
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
    public Area buscarPorId(long id) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Area.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Area> buscarTodos() {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Area").getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Area> buscarPorNombre(String nombre) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Area where nombre = :nombre").setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Area> buscarPorEje(Eje eje) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorEje'");
    }
    @Override
    public List<Area> buscarPorSecretaria(Secretaria secretaria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorSecretaria'");
    }
    
}
