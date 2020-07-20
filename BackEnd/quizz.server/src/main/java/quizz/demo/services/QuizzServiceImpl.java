package quizz.demo.services;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.repositories.QuestionRepository;
import quizz.demo.repositories.QuizzRepository;
import quizz.demo.repositories.ThemeRepository;

@EnableScheduling
@Service
public class QuizzServiceImpl implements QuizzService {

	@Autowired
	QuizzRepository quizzRepository;

	@Autowired
	QuestionService questionService;

	@Autowired
	QuestionRepository questionRepository;

	@Autowired
	ThemeRepository themeRepository;

	@Override
	public Optional<Quizz> getQuizzById(Long quizzId) {
		return quizzRepository.findById(quizzId);
	}

	@Override
	public Quizz saveOrUpDate(Quizz quizz) {
		return quizzRepository.save(quizz);
	}

	public Optional<Quizz> createQuizzbyTypeAndThemeAndLevel(QuizzType type, String theme, int level) {
		int quizzQuestionsNumber = 10;
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
		quizz.setQuestionsNumber(quizzQuestionsNumber);
		List<Question> questions = questionService.getByTypeAndThemeAndLevel(question.getType(), theme, level,
				quizz.getQuestionsNumber());
		quizz.setQuestions(questions);
		quizz.setType(type);
		Theme quizzTheme = themeRepository.findThemeByTheme(theme)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Aucun theme trouvé! "));
		quizz.setTheme(quizzTheme);
		quizz.setLevel(level);
		quizz.setExpirationDate(LocalDateTime.now().plus(1, ChronoUnit.MINUTES));
		quizzRepository.save(quizz);
		return Optional.ofNullable(quizz);
	}

	@Override
	public Optional<Quizz> getQuizzByTypeAndThemeAndCategory(QuizzType type, String theme, String Category) {

		return quizzRepository.findByTypeAndThemeThemeAndCategoryCategory(type, theme, Category);
	}

	@Scheduled(cron = "00 00 01 * * *")
	private void delete() {
		//System.out.println("start deleting");
        List<Quizz> expiredQuizzList = quizzRepository.findAllQuizzesExpired(LocalDateTime.now());
        if(expiredQuizzList.size() > 0)
        	quizzRepository.deleteAll(expiredQuizzList);
	}

}