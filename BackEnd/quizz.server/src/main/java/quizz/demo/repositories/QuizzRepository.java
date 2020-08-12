package quizz.demo.repositories;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;

public interface QuizzRepository extends JpaRepository<Quizz, Long> {

	Optional<Quizz> findByTypeAndThemeAndLevel(QuizzType type, Theme theme, int level);

	Optional<Quizz> findByTypeAndThemeThemeAndCategoryCategory(QuizzType type, String theme, String Category);
    
	@Query("select quizz from Quizz quizz where  quizz.expirationDate <= :currentDate ")
	List <Quizz> findAllQuizzesExpired(@Param ("currentDate") LocalDateTime currentDate );
}
