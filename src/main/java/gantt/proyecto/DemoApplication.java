package gantt.proyecto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		EntityManagerFactory emf = jakarta.persistence.Persistence.createEntityManagerFactory("persistencia");
		EntityManager em = emf.createEntityManager();
		SpringApplication.run(DemoApplication.class, args);
	}

}
