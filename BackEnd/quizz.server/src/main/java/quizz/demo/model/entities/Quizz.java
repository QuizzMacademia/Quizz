package quizz.demo.model.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OrderColumn;

@Entity
public class Quizz {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Enumerated(EnumType.STRING)
	private QuizzType type;

	private int level;

	private String theme;

	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	@OrderColumn
	private List<Question> questions = new ArrayList();

	private int questionsNumber;

	private LocalDateTime expirationDate;

	public Quizz() {
	}

	public Quizz(long id, QuizzType type, int level, String theme, List<Question> questions, int questionsNumber,
			LocalDateTime expirationDate) {
		this.id = id;
		this.type = type;
		this.level = level;
		this.theme = theme;
		this.questions = questions;
		this.questionsNumber = questionsNumber;
		this.expirationDate = expirationDate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public QuizzType getType() {
		return type;
	}

	public void setType(QuizzType type) {
		this.type = type;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public int getQuestionsNumber() {
		return questionsNumber;
	}

	public void setQuestionsNumber(int questionsNumber) {
		this.questionsNumber = questionsNumber;
	}

	public LocalDateTime getexpirationDate() {
		return expirationDate;
	}

	public void setexpirationDate(LocalDateTime expirationDate) {
		this.expirationDate = expirationDate;
	}

	@Override
	public String toString() {
		return "Quizz [id=" + id + ", type=" + type + ", level=" + level + ", theme=" + theme + ", questions="
				+ questions + ", questionsNumber=" + questionsNumber + ", expirationDate=" + expirationDate
				+ "]";
	}

}
