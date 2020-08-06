package quizz.demo.services;

import java.util.List;
import java.util.Optional;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.repositories.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	QuestionRepository questionRepository;

	@Override
	public List<Question> getAllQuestions() {
		return questionRepository.findAll();
	}

	@Override
	public Optional<Question> getQuestionById(Long questionId) {
		return questionRepository.findById(questionId);
	}

	@Override
	public Question saveOrUpDate(Question question) {
		return questionRepository.save(question);
	}

	@Override
	public List<Question> getByTypeAndThemeAndLevel(QuestionType type, String theme, int level, int questionsNumber) {
		Pageable pageable = PageRequest.of(0, questionsNumber);
		return questionRepository.findByTypeAndThemeAndLevel(type, theme, level, pageable, questionsNumber);
	}
	@Override
	public Optional<Question> getQuestionByQuizzIdAndQuestionId(Long quizzId, int questionId) {

		return questionRepository.findByQuizzIdAndQuestionId(quizzId, questionId);
	}

	@Override
	public List<Integer> getLevelsByQuestionTypeAndTheme(QuestionType questionType, String theme) {
	
		return questionRepository.findLevelsByQuestionTypeAndTheme(questionType, theme);
	} 
	@Override
	public Object compileCodeJavaScript(String code) throws ScriptException {
		
		
			/*String script = "function toto(num) {\n"
					+ "let a = 1;\n"
					+ "let b = 2\n"
					+ "print(a + b)\n"
					+ "if(a+b > 2){\n"
					+ "console.log('plus grand que 2')}\n"
					+ "return a+b}";*/
			 
			ScriptEngine engine = new ScriptEngineManager(null).getEngineByName("JavaScript");
			return engine.eval(code);
		
	}
}
