package quizz.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;

public interface QuizzRepository extends JpaRepository<Quizz, Long> {

	Optional<Quizz>findByTypeAndThemeAndLevel(QuizzType type, String theme, int level) ;
	
	@Query("select question from Quizz quizz join quizz.questions question where quizz.id= ?1 and INDEX(question)= ?2")
	Optional<Question>findByQuizzIdAndQuestionId(Long quizzId,int questionId);
}
