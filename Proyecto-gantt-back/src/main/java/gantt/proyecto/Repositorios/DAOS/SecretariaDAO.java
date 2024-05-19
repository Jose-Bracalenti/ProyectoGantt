package gantt.proyecto.Repositorios.DAOS;
import java.util.List;

import org.springframework.stereotype.Repository;

import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.Interfaces.DAOinterface;
import jakarta.persistence.EntityManager;

@Repository

public class SecretariaDAO implements DAOinterface<Secretaria>{
    public void insertar(Secretaria obj) {
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
    public void modificar(Secretaria obj) {
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
    public void eliminar(Secretaria obj) {
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
    public Secretaria buscarPorId(long id) {
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Secretaria.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Secretaria> buscarTodos() {
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Secretaria").getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Secretaria> buscarPorNombre(String nombre) {
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Secretaria where nombre like %:nombre%").setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Secretaria> buscarPorEje(Eje eje) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorEje'");
    }
    @Override
    public List<Secretaria> buscarPorSecretaria(Secretaria secretaria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorSecretaria'");
    }
    @Override
    public List<Secretaria> buscarPorObjetivo(Objetivo objetivo) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorObjetivo'");
    }
}
