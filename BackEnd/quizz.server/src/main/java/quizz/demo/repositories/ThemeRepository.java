package quizz.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface ThemeRepository extends JpaRepository<Theme, Long> {

	Optional<Theme> findThemeByTheme(String theme);

	@Query("select distinct (theme) from Quizz quizz join quizz.theme theme where quizz.type=?1")
	Optional<List<Theme>> findQuizzThemeByType(QuizzType type);
	
	@Query("select distinct (theme) from Question q join q.theme theme where q.type=?1")
	Optional<List<Theme>> findQuestionThemeByType(QuestionType type);
}
