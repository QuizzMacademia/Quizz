package quizz.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.services.QuestionService;
import quizz.demo.services.QuizzService;

@RestController
@RequestMapping("/quizz")
@CrossOrigin
public class QuizzController {

	@Autowired
	QuizzService quizzService;

	@Autowired
	QuestionService questionService;

	// Provides Quizz'id by quizz's type, by theme and by difficulty's level
	@PostMapping(value = "/generate")
	public ResponseEntity<Long> generateQuizz(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme, @RequestParam(value = "level") int level) {
		Quizz quizz = quizzService.getQuizzbyTypeAndThemeAndLevel(quizzType, quizzTheme, level)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Une erreur est survenue pendant la génération du quizz!"));
		Long quizzId = quizz.getId();
		return new ResponseEntity<Long>(quizzId, HttpStatus.OK);
	}

	// Provides question By quizz's id and by question's id
	@GetMapping(value = "/{id}/question/{q-id}")
	public ResponseEntity<Question> getQuestionByQuizzId(@PathVariable(value = "id") Long quizzId,
			@PathVariable(value = "q-id") Integer questionId) {
		Question question = quizzService.getQuestiondByQuizzIdAndQuestionId(quizzId, questionId).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Aucun quizz trouvé avec l'id: " + questionId));
		return new ResponseEntity<Question>(question, HttpStatus.OK);

	}

}
