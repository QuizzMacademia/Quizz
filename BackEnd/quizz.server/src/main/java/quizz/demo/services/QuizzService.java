package quizz.demo.services;

import java.util.Optional;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;

public interface QuizzService {

	Optional<Quizz> getQuizzById(Long quizzId);

	Optional<Quizz> createQuizzbyTypeAndThemeAndLevel(QuizzType type, String theme, int level);

	Optional<Question> getQuestiondByQuizzIdAndQuestionId(Long quizzId, int questionId);

	Quizz saveOrUpDate(Quizz quizz);

}
