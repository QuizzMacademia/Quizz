package quizz.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import quizz.demo.model.entities.User;
import quizz.demo.repositories.UserRepository;
import quizz.demo.request.LoginForm;
import quizz.demo.services.UserService;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Cette classe a pour rôle d'identifier les utilisateurs. L'authentification
 * des utilisateurs se fait grâce à l'email ou au numéro de mobile (en tant que
 * nom d'utilisateur) ainsi qu'avec un code temporaire envoyé par le serveur à
 * l'email ou au numéro de mobile. Elle est responsable notamment du traitement
 * des requêtes /login et /token.
 */
@RestController
@CrossOrigin
public class AuthenticationController {

	/**
	 * @param login the email or the mobile number of the user
	 * @return the id of the user
	 */
//    @RequestMapping(value = "/login", method = POST)
//    public Number login(@RequestBody String login) {
//        return -1;
//    }

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserService userService;

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

}
