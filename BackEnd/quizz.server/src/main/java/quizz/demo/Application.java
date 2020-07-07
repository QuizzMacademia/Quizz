package quizz.demo;

import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.Theme;
import quizz.demo.model.entities.User;
import quizz.demo.repositories.CategoryRepository;
import quizz.demo.repositories.QuestionRepository;
import quizz.demo.repositories.QuizzRepository;
import quizz.demo.repositories.ThemeRepository;
import quizz.demo.repositories.UserRepository;
import quizz.demo.tools.json.CategoryAdapter;
import quizz.demo.tools.json.JSONLoader;
import quizz.demo.tools.json.QuestionAdapter;
import quizz.demo.tools.json.QuizzAdapter;
import quizz.demo.tools.json.ThemeAdapter;
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
	
	@Bean
	ApplicationRunner initThemeRepository(ThemeRepository themeRepository) {
		return args -> {
			if (themeRepository.findAll().isEmpty()) {
				new JSONLoader<>("src/main/resources/data/themes.json", Theme[].class, Theme.class, themeRepository,
						new ThemeAdapter()).load();
			}
		};
	}
	
	@Bean
	ApplicationRunner initCategoryRepository(CategoryRepository categoryRepository) {
		return args -> {
			if (categoryRepository.findAll().isEmpty()) {
				new JSONLoader<>("src/main/resources/data/categories.json", Category[].class, Category.class,
						categoryRepository, new CategoryAdapter()).load();

			}
		};
	}

	@Bean
	ApplicationRunner initQuestionRepository(QuestionRepository questionRepository) {
		return args -> {
			if (questionRepository.findAll().isEmpty()) {
				new JSONLoader<>("src/main/resources/data/questions.json", Question[].class, Question.class,
						questionRepository, new QuestionAdapter()).load();

			}
		};

	}
    
    @Bean
    ApplicationRunner initTrainingRepository (QuizzRepository quizzRepository) {
    	return args ->{
    		if(quizzRepository.findAll().isEmpty()) {
    			new JSONLoader<>("src/main/resources/data/training.json", Quizz[].class, Quizz.class, quizzRepository, new QuizzAdapter()).load();	}
    	};
    }
}
