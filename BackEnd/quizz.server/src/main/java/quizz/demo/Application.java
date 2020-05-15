package quizz.demo;

import quizz.demo.model.entities.User;
import quizz.demo.repositories.UserRepository;
import quizz.demo.tools.json.JSONLoader;
import quizz.demo.tools.json.UserAdapter;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class Application {

	// lance le serveur
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	ApplicationRunner initUserRepository(UserRepository userRepository) {
		return args -> {
			if (userRepository.findAll().isEmpty()) {
				new JSONLoader<>("src/main/resources/data/users.json", User[].class, User.class, userRepository,
						new UserAdapter()).load();

			}
		};
	}
}
