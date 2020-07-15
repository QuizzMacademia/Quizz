package quizz.demo.services;

import java.util.List;
import java.util.Optional;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface ThemeService {

	Optional<List<Theme>> getThemesByQuizzType(QuizzType type);
}
