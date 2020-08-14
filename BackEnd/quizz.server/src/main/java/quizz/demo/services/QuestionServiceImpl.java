package quizz.demo.services;

import java.io.StringWriter;
import java.util.List;
import java.util.Optional;
import org.python.util.PythonInterpreter;
import javax.script.ScriptContext;
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
	public String evaluateCode(String theme, String code) throws ScriptException {
		String eval = null;
		if(theme != null) {
			switch (theme) {
			case "Javascript":
				eval = evaluateJavascriptCode(code);
				break;
			case "Python":
				eval = evaluatePythonCode(code);
				break;
			default:
				break;
			}
		}
		return eval;
	}

	private String evaluateJavascriptCode(String code) throws ScriptException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		ScriptContext context = engine.getContext();
		StringWriter writer = new StringWriter();
		context.setWriter(writer);
		engine.eval(code);
		String result = writer.toString();
		return result;
		
	}


	private String evaluatePythonCode(String code)throws ScriptException {
		try(PythonInterpreter pythonInterpreter = new PythonInterpreter()) {
			StringWriter writer = new StringWriter();
			pythonInterpreter.setOut(writer);
			pythonInterpreter.exec(code);
		    String result = writer.toString();
		    return result;
		    }
	}

	
}
