package quizz.demo.services;

import java.util.List;
import java.util.Optional;

import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.Theme;

public interface QuestionService {

	List<Question> getAllQuestions();

	Optional<Question> getQuestionById(Long questionId);

	Question saveOrUpDate(Question question);

	List<Question> getByTypeAndThemeAndLevel(QuestionType type, String theme, int level, int questionsNumber);
    
	Optional<Question> getQuestionByQuizzIdAndQuestionId(Long quizzId, int questionId);

}
