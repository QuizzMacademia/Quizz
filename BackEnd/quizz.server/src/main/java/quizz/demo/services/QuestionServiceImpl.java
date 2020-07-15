package quizz.demo.services;

import java.util.List;
import java.util.Optional;
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
}
