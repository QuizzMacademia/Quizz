package quizz.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import quizz.demo.model.entities.Choice;

public interface ChoiceRepository extends JpaRepository <Choice,Long>{

}
