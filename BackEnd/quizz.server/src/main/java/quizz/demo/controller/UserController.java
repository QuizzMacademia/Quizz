package quizz.demo.controller;

import quizz.demo.model.entities.User;
import quizz.demo.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;


/**
 * Cette classe est responsable du traitement des requêtes liées aux utilisateurs comme /users.
 */
@RestController
@CrossOrigin
public class UserController {

    /**
     *
     */
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/users")
    public List<User> getUsers(){
        return (List<User>) this.repository.findAll();
    }


}
