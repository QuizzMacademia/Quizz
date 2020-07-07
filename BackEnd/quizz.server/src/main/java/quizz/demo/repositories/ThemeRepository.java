package quizz.demo.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import quizz.demo.model.entities.Theme;

public interface ThemeRepository extends JpaRepository<Theme, Long> {

	Optional <Theme> findThemeByTheme(String theme);
}
