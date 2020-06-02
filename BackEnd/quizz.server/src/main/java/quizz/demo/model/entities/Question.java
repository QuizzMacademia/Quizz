package quizz.demo.model.entities;


import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

@Entity
public class Question {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String questionText;
	
	@Enumerated(EnumType.STRING)
	private QuestionType type;
	
	private String theme;
	
	private int level;
	
	private String choiceType;///check box ou radio button 
	
	@OneToMany(cascade=CascadeType.ALL, fetch= FetchType.EAGER)
	private Set <Choice>choices=new HashSet<>();
	
	private int [] correctAnswer ;//Ici on n'a pas encore prévu la partie script!!!
	
	@Lob
	private String explanation;

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(long id, String questionText, QuestionType type, String theme, int level, String choiceType,
			Set<Choice> choices, int[] correctAnswer, String explanation) {
		super();
		this.id = id;
		this.questionText = questionText;
		this.type = type;
		this.theme = theme;
		this.level = level;
		this.choiceType = choiceType;
		this.choices = choices;
		this.correctAnswer = correctAnswer;
		this.explanation = explanation;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public QuestionType getType() {
		return type;
	}

	public void setType(QuestionType type) {
		this.type = type;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getChoiceType() {
		return choiceType;
	}

	public void setChoiceType(String choiceType) {
		this.choiceType = choiceType;
	}

	public Set<Choice> getChoices() {
		return choices;
	}

	public void setChoices(Set<Choice> choices) {
		this.choices = choices;
	}

	public int[] getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(int[] correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", questionText=" + questionText + ", type=" + type + ", theme=" + theme
				+ ", level=" + level + ", choiceType=" + choiceType + ", choices=" + choices + ", correctAnswer="
				+ Arrays.toString(correctAnswer) + ", explanation=" + explanation + "]";
	}
	
}
