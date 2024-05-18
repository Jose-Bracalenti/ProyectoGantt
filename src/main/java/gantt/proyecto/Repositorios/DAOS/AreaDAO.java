package gantt.proyecto.Repositorios.DAOS;

import gantt.proyecto.Modelo.Area;
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
