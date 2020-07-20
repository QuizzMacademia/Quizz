package quizz.demo.services;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.scheduling.annotation.Scheduled;

import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;


public interface QuizzService {

	Optional<Quizz> getQuizzById(Long quizzId);

	Optional<Quizz> createQuizzbyTypeAndThemeAndLevel(QuizzType type, String theme, int level);

	Quizz saveOrUpDate(Quizz quizz);

	Optional<Quizz> getQuizzByTypeAndThemeAndCategory(QuizzType type, String theme, String Category);
	
	//Boolean expired(LocalDateTime expirationDate, LocalDateTime currentDate);
	
	//void quizzExist(Long quizzId);
	
	
		
	

}
