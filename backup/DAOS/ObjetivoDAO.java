package gantt.proyecto.Repositorios.DAOS;
import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.Interfaces.*;
import jakarta.persistence.EntityManager;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository

public class ObjetivoDAO implements DAOinterface<Objetivo>{
    public void insertar(Objetivo obj) {
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
    public void modificar(Objetivo obj) {
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
    public void eliminar(Objetivo obj) {
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
    public Objetivo buscarPorId(long id) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Objetivo.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")

    public List<Objetivo> buscarTodos() {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Objetivo").getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    
    @SuppressWarnings("unchecked")
    public List<Objetivo> buscarPorNombre(String nombre) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Objetivo where nombre like %:nombre%").setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Objetivo> buscarPorSecretaria(Secretaria secretaria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorSecretaria'");
    }
    @Override
    public List<Objetivo> buscarPorEje(Eje eje) {
        List<Objetivo> objetivos = null;
        objetivos = eje.getObjetivos();
        return objetivos;
    }
    @Override
    public List<Objetivo> buscarPorObjetivo(Objetivo objetivo) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarPorObjetivo'");
    }

}
