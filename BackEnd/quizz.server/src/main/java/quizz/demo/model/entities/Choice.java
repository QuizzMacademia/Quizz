package quizz.demo.model.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Choice {
	
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)	
private long id;

private String choice;

public Choice() {
}
public Choice(long id, String choice) {
	this.id = id;
	this.choice = choice;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getChoice() {
	return choice;
}
public void setChoice(String choice) {
	this.choice = choice;
}
@Override
public String toString() {
	return "Choice [id=" + id + ", choice=" + choice + "]";
}

}
