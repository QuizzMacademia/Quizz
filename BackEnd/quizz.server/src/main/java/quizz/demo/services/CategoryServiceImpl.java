package quizz.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import quizz.demo.model.entities.Category;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	CategoryRepository categoryRepository;

	@Override
	public Optional<List<Category>> getCategoriesByQuizzTypeAndQuestionTheme(QuizzType type, String theme) {

		return categoryRepository.findQuizzCategoriesByTypeAndTheme(type, theme);
	}

}
