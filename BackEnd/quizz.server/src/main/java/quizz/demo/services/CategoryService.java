package quizz.demo.services;

import java.util.List;
import java.util.Optional;
import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;


public interface CategoryService {

	Optional<List<Category>> getCategoriesByQuizzTypeAndQuestionTheme(QuizzType type, String theme);
}
