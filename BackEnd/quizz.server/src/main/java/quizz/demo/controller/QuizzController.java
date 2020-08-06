package quizz.demo.controller;

import java.util.List;

import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.Question;
import quizz.demo.model.entities.QuestionType;
import quizz.demo.model.entities.Quizz;
import quizz.demo.model.entities.QuizzInfo;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.services.CategoryService;
import quizz.demo.services.QuestionService;
import quizz.demo.services.QuizzService;
import quizz.demo.services.ThemeService;


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

	@Autowired
	ThemeService themeService;

	
	// Provides quizz themes (for EXERCISING quizz) by type
		@GetMapping(value = "exercising/themes")
		public ResponseEntity<List<Theme>> getThemesByQuestionType(@RequestParam(value = "type") QuestionType questionType) {
			List<Theme> themes = themeService.getThemesByQuestionType(questionType)
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							"Une erreur est survenue!"));
			return new ResponseEntity<List<Theme>>(themes, HttpStatus.OK);
		}
		
	
	//Provides quizz levels by type and theme
	@GetMapping(value="/levels")
	public ResponseEntity<List<Integer>> getLevels(@RequestParam(value="type")QuestionType questionType, @RequestParam(value="theme")String questionTheme){
	List<Integer>levels=questionService.getLevelsByQuestionTypeAndTheme(questionType, questionTheme);
	return new ResponseEntity<List<Integer>>(levels,HttpStatus.OK);
	}

	
	// Provides quizz's id and questions number by quizz's type, by theme and by
	// difficulty's level
	@PostMapping(value = "/generate")
	public ResponseEntity<QuizzInfo> generateQuizz(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme, @RequestParam(value = "level") int level) {
		Quizz quizz = quizzService.createQuizzbyTypeAndThemeAndLevel(quizzType, quizzTheme, level)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Une erreur est survenue pendant la génération du quizz!"));
		QuizzInfo quizzInfo = new QuizzInfo();
		quizzInfo.setQuizzId(quizz.getId());
		quizzInfo.setQuizzQuestionNumber(quizz.getQuestionsNumber());
		return new ResponseEntity<QuizzInfo>(quizzInfo, HttpStatus.OK);
	}
	
	// Provides quizz themes (forTRAINING quizz) by type
		@GetMapping(value = "/themes")
		public ResponseEntity<List<Theme>> getThemes(@RequestParam(value = "type") QuizzType quizzType) {
			List<Theme> themes = themeService.getThemesByQuizzType(quizzType)
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							"Une erreur est survenue!"));
			return new ResponseEntity<List<Theme>>(themes, HttpStatus.OK);
		}
		
	//Provides quizz levels by type and theme

	// Provides Quizz categories, by type and theme
	@GetMapping(value = "/categories")
	public ResponseEntity<List<Category>> getCategories(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme) {
		List<Category> categories = categoryService.getCategoriesByQuizzTypeAndQuestionTheme(quizzType, quizzTheme)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"une erreur est survenue pendant de la recherche de categories"));

		return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
	}

	// Provides TRAINING Id and questions number By type, theme and category
	@GetMapping(value = "/id/questionNumber")
	public ResponseEntity<QuizzInfo> getQuizId(@RequestParam(value = "type") QuizzType quizzType,
			@RequestParam(value = "theme") String quizzTheme, @RequestParam(value = "category") String quizzCategory) {
		Quizz quizz = quizzService.getQuizzByTypeAndThemeAndCategory(quizzType, quizzTheme, quizzCategory)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Une erreur est survenue pendant la recherche de training!"));
		QuizzInfo quizzInfo = new QuizzInfo();
		quizzInfo.setQuizzId(quizz.getId());
		quizzInfo.setQuizzQuestionNumber(quizz.getQuestionsNumber());
		return new ResponseEntity<QuizzInfo>(quizzInfo, HttpStatus.OK);
	}

	// Provides question By quizz's id and by question's id
	@GetMapping(value = "/{id}/question/{q-id}")
	public ResponseEntity<Question> getQuestionByQuizzId(@PathVariable(value = "id") Long quizzId,
			@PathVariable(value = "q-id") Integer questionId) {
		Question question = questionService.getQuestionByQuizzIdAndQuestionId(quizzId, questionId).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Aucun quizz trouvé avec l'id: " + questionId));

		return new ResponseEntity<Question>(question, HttpStatus.OK);
	}
	
	@PostMapping(value = "/codeJS")
	public Object codeJavaScript(@RequestBody  String code) throws ScriptException {
		
		return questionService.compileCodeJavaScript(code);
	}

}
