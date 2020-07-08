package quizz.demo.model.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OrderColumn;

@Entity
public class Quizz {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quizz_id")
	private long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "quizz_type")
	private QuizzType type;

	private int level;

	// Sans cascade parceque le quizz ne peut pas exister sans le theme
	// !!!Si je mets ici Cascade.All theme ne se crée que si je crée la quizz alors
	// que le theme peut exister sans quizz
	// Idem pour category
	@ManyToOne
	private Theme theme;

	private int questionsNumber;

	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	@OrderColumn
	private List<Question> questions = new ArrayList();

	private LocalDateTime expirationDate;

	@ManyToOne
	private Category category;

	public Quizz() {
	}

	public Quizz(long id, QuizzType type, int level, Theme theme, int questionsNumber, List<Question> questions,
			LocalDateTime expirationDate, Category category) {
		super();
		this.id = id;
		this.type = type;
		this.level = level;
		this.theme = theme;
		this.questionsNumber = questionsNumber;
		this.questions = questions;
		this.expirationDate = expirationDate;
		this.category = category;
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

	public Theme getTheme() {
		return theme;
	}

	public void setTheme(Theme theme) {
		this.theme = theme;
	}

	public int getQuestionsNumber() {
		return questionsNumber;
	}

	public void setQuestionsNumber(int questionsNumber) {
		this.questionsNumber = questionsNumber;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public LocalDateTime getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(LocalDateTime expirationDate) {
		this.expirationDate = expirationDate;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Quizz [id=" + id + ", type=" + type + ", level=" + level + ", theme=" + theme + ", questionsNumber="
				+ questionsNumber + ", questions=" + questions + ", expirationDate=" + expirationDate + ", category="
				+ category + "]";
	}
	
}
