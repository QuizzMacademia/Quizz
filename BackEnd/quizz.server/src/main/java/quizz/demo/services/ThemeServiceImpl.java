package quizz.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quizz.demo.model.entities.QuizzType;
import quizz.demo.model.entities.Theme;
import quizz.demo.repositories.ThemeRepository;

@Service
public class ThemeServiceImpl implements ThemeService {

	@Autowired
	ThemeRepository themeRepository;

	@Override
	public Optional<List<Theme>> getThemesByQuizzType(QuizzType type) {
		return themeRepository.findQuizzThemeByType(type);
	}

}
