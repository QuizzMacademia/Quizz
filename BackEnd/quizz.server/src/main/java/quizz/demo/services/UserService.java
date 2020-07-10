package quizz.demo.services;

import java.util.Optional;
import quizz.demo.model.entities.User;

public interface UserService {

	Optional<User> getUserByEmail(String email);
    Boolean alreadyExistsByEmail(String email);
}
