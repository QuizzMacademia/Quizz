package quizz.demo.services;

import java.io.StringWriter;
import java.util.List;
import java.util.Optional;

import javax.script.ScriptException;

import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;


public interface QuestionService {

	List<Question> getAllQuestions();

	Optional<Question> getQuestionById(Long questionId);

	Question saveOrUpDate(Question question);

	List<Question> getByTypeAndThemeAndLevel(QuestionType type, String theme, int level, int questionsNumber);
    
	Optional<Question> getQuestionByQuizzIdAndQuestionId(Long quizzId, int questionId);
	
	List<Integer> getLevelsByQuestionTypeAndTheme(QuestionType questionType, String theme);


	StringWriter compileCodePython(String code);

	Object compileCodeJavaScript(String code) throws ScriptException;


}
