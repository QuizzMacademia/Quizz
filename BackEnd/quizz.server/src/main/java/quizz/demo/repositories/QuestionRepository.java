package quizz.demo.repositories;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	@Query("select q from Question q where q.type = ?1 and q.theme.theme = ?2 and q.level = ?3 order by rand()")
	List<Question> findByTypeAndThemeAndLevel(QuestionType type, String theme, int level, Pageable pageable,
			int questionsNumber);
	
	@Query("select question from Quizz quizz join quizz.questions question where quizz.id= ?1 and INDEX(question)= ?2")
	Optional<Question> findByQuizzIdAndQuestionId(Long quizzId, int questionId);
	
	@Query("select distinct(q.level) from Question q  where q.type=?1 and q.theme.theme=?2 order by q.level asc")
	List<Integer> findLevelsByQuestionTypeAndTheme(QuestionType questionType, String theme);
}
