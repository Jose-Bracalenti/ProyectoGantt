package gantt.proyecto.Repositorios.DAOS;

import java.util.List;


import gantt.proyecto.Modelo.*;
import gantt.proyecto.Repositorios.Interfaces.*;
import jakarta.persistence.EntityManager;

public class ActividadDAO implements DAOinterface<Actividad>{
    public void insertar(Actividad obj) {
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
    public void modificar(Actividad obj) {
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
    public void eliminar(Actividad obj) {
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


    public Actividad buscarPorId(long id) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.find(Actividad.class, id);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Actividad> buscarTodos() {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Actividad").getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @SuppressWarnings("unchecked")
    public List<Actividad> buscarPorNombre(String nombre) {
        // TODO Auto-generated method stub
        try {
            EntityManager em = HibernateUtil.getEntityManager();
            return em.createQuery("from Actividad where nombre = :nombre").setParameter("nombre", nombre).getResultList();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    public List<Actividad> buscarPorEje(Eje eje) {
        // TODO Auto-generated method stub
        try {
            List<Actividad> actividades = null;
            actividades = eje.getObjetivos().stream().map(objetivo -> objetivo.getPoliticas()).flatMap(politica -> politica.stream()).map(politica -> politica.getActividades()).flatMap(actividad -> actividad.stream()).toList();
            return actividades;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Actividad> buscarPorSecretaria(Secretaria secretaria) {
        List<Actividad> actividades = null;
        actividades = secretaria.getPoliticas().stream().map(politica -> politica.getActividades()).flatMap(actividad -> actividad.stream()).toList();
        return actividades;
    }

    
}
