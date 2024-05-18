package gantt.proyecto.Repositorios.DAOS;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class HibernateUtil {
    private static EntityManagerFactory emf;
	private static EntityManager manager = null;
	public static EntityManager getEntityManager(){
		try {
			if(manager == null) {
				manager = emf.createEntityManager();
			}
			return manager;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	public static void createEMF(){
		emf = Persistence.createEntityManagerFactory("persistencia");
	}
}
