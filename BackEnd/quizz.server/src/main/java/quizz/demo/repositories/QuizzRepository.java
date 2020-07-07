package quizz.demo.repositories;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface QuizzRepository extends JpaRepository<Quizz, Long> {

	Optional<Quizz> findByTypeAndThemeAndLevel(QuizzType type, Theme theme, int level);

	Optional<Quizz> findByTypeAndThemeThemeAndCategoryCategory(QuizzType type, String theme, String Category);

}
