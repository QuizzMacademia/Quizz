package quizz.demo.services;


import java.util.Optional;
import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface QuizzService {

	Optional<Quizz> getQuizzById(Long quizzId);

	Optional<Quizz> createQuizzbyTypeAndThemeAndLevel(QuizzType type, Theme theme, int level);

	Quizz saveOrUpDate(Quizz quizz);

	Optional<Quizz> getQuizzByTypeAndThemeAndCategory(QuizzType type, String theme, String Category);

}
