package quizz.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import quizz.demo.model.entities.User;
import quizz.demo.repositories.UserRepository;

@Service(value="userService")
public class UserServiceImpl implements UserService {
@Autowired 
UserRepository userRepository;
	@Override
	public Optional<User> getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}
