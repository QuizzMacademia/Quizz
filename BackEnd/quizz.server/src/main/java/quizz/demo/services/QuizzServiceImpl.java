package quizz.demo.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
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

	public Optional<Quizz> getQuizzbyTypeAndThemeAndLevel(QuizzType type, String theme, int level) {
		Quizz quizz = new Quizz();
		Question question=new Question ();
		switch(type) {
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
		List<Question> questions=questionService.getByTypeAndThemeAndLevel(question.getType(), theme, level);
        quizz.setQuestions(questions);
        quizzRepository.save(quizz);
        return Optional.ofNullable(quizz);
	}
    

	@Override
	public Optional<Question> getQuestiondByQuizzIdAndQuestionId(Long quizzId, int questionId) {
		return quizzRepository.findByQuizzIdAndQuestionId(quizzId, questionId);
	}
	
	

}
