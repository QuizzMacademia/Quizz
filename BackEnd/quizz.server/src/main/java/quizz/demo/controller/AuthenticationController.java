package quizz.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import quizz.demo.model.entities.User;
import quizz.demo.repositories.UserRepository;
import quizz.demo.request.LoginForm;
import quizz.demo.request.RegisterForm;
import quizz.demo.services.UserService;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@CrossOrigin
public class AuthenticationController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder encoder;

	@RequestMapping(value = "/login", method = POST)
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
		if (loginRequest != null) {
			Optional<User> userFromDB = userService.getUserByEmail(loginRequest.getEmail());
			if (!userFromDB.isPresent()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Aucun utilisateur trouvé");
			} else {
				String passwordFromDB = userFromDB.get().getPassword();
				String passwordRequest = loginRequest.getPassword();
				if (passwordRequest == null || !(passwordFromDB.equals(passwordRequest))) {
					throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
							"Les 2 mots de passe ne correspondent pas");
				} else
					return new ResponseEntity<String>("Authorized", HttpStatus.OK);
			}

		} else
			return new ResponseEntity<String>("Aucun utilisateur trouvé", HttpStatus.UNAUTHORIZED);
	}

	@PostMapping(value = "/register")
	public ResponseEntity<?> signUp(@Valid @RequestBody RegisterForm registerForm) {
		if (userService.alreadyExistsByEmail(registerForm.getEmail())) {
			return new ResponseEntity<String>("Cet email existe déjà!", HttpStatus.BAD_REQUEST);
		}
		if (!registerForm.getPassword().equals(registerForm.getPasswordConfirmation())) {
			return new ResponseEntity<String>("Les deux mots de passent ne correspondent pas!",
					HttpStatus.UNAUTHORIZED);
		}
		User user = new User();
		String passwordEncoded = encoder.encode(registerForm.getPassword());
		user.setEmail(registerForm.getEmail());
		user.setPassword(passwordEncoded);
		userRepository.save(user);
		return new ResponseEntity<String>("L'utilisateur est enregistré avec succès!", HttpStatus.OK);
	}
}
