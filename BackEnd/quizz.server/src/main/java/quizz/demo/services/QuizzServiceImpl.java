package quizz.demo.services;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.repositories.CategoryRepository;
import quizz.demo.repositories.QuestionRepository;
import quizz.demo.repositories.QuizzRepository;

@Service
public class QuizzServiceImpl implements QuizzService {

	@Autowired
	QuizzRepository quizzRepository;

	@Autowired
	QuestionService questionService;

	@Autowired
	QuestionRepository questionRepository;


	@Override
	public Optional<Quizz> getQuizzById(Long quizzId) {
		return quizzRepository.findById(quizzId);
	}

	@Override
	public Quizz saveOrUpDate(Quizz quizz) {
		return quizzRepository.save(quizz);
	}

	public Optional<Quizz> createQuizzbyTypeAndThemeAndLevel(QuizzType type, Theme theme, int level) {
		Quizz quizz = new Quizz();
		Question question = new Question();
		switch (type) {
		case EXERCISING:
			question.setType(QuestionType.ToExercise);
			break;
		case TRAINING:
			question.setType(QuestionType.ToExercise);
			break;
		case CERTIFICATION:
			question.setType(QuestionType.ToCertificate);
			break;
		default:
			break;
		}
		quizz.setQuestionsNumber(10);
		List<Question> questions = questionService.getByTypeAndThemeAndLevel(question.getType(), theme, level,
				quizz.getQuestionsNumber());
		quizz.setQuestions(questions);
		quizz.setType(type);
		quizz.setTheme(theme);
		quizz.setLevel(level);
		if (type.equals(QuizzType.EXERCISING)) {
			quizz.setExpirationDate(LocalDateTime.now().plus(2, ChronoUnit.MINUTES));
		}
		quizzRepository.save(quizz);

		return Optional.ofNullable(quizz);
	}

	@Override
	public Optional<Quizz> getQuizzByTypeAndThemeAndCategory(QuizzType type, String theme, String Category) {

		return quizzRepository.findByTypeAndThemeThemeAndCategoryCategory(type, theme, Category);
	}

	

}