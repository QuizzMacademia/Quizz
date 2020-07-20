package quizz.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	@Query("select category from Quizz quizz join quizz.category category where quizz.type=?1 and quizz.theme.theme=?2 order by quizz.category asc")
	Optional<List<Category>>findQuizzCategoriesByTypeAndTheme(QuizzType type, String theme);
}
