package quizz.demo.controller;


import java.util.List;
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
import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.services.CategoryService;
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
	
	@Autowired
	CategoryService categoryService;
	

	// Provides Quizz's id by quizz's type, by theme and by difficulty's level
	@PostMapping(value = "/generate")
	public ResponseEntity<Long> generateQuizz(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme, @RequestParam(value = "level") int level) {
		Quizz quizz = quizzService.createQuizzbyTypeAndThemeAndLevel(quizzType, quizzTheme, level)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Une erreur est survenue pendant la génération du quizz!"));
		Long quizzId = quizz.getId();
		return new ResponseEntity<Long>(quizzId, HttpStatus.OK);
	}

	// Provides Quizz categories, by type and theme
	@GetMapping(value = "/categories")
	public ResponseEntity<List<Category>> getCategories(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme")String quizzTheme) {
		List<Category> categories = categoryService.getCategoriesByQuizzTypeAndQuestionTheme(quizzType, quizzTheme)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"une erreur est survenue pendant de la recherche de categories"));

		return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
	}

	// Provides TRAINING By type, theme and category
	@GetMapping(value = "/id")
	public ResponseEntity<Long> getQuizId(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme, @RequestParam(value = "category") String quizzCategory) {
		Quizz quizz = quizzService.getQuizzByTypeAndThemeAndCategory(quizzType, quizzTheme, quizzCategory)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Une erreur est survenue pendant la recherche de training!"));

		return new ResponseEntity<Long>(quizz.getId(), HttpStatus.OK);
	}

	// Provides question By quizz's id and by question's id
	@GetMapping(value = "/{id}/question/{q-id}")
	public ResponseEntity<Question> getQuestionByQuizzId(@PathVariable(value = "id") Long quizzId,
			@PathVariable(value = "q-id") Integer questionId) {
		Question question = questionService.getQuestionByQuizzIdAndQuestionId(quizzId, questionId).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Aucun quizz trouvé avec l'id: " + questionId));

		return new ResponseEntity<Question>(question, HttpStatus.OK);
	}

}
