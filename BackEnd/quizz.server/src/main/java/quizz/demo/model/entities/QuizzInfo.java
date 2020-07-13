package quizz.demo.model.entities;

public class QuizzInfo {
	private Long quizzId;
	private int quizzQuestionNumber;

	public QuizzInfo() {

	}

	public QuizzInfo(Long quizzId, int quizzQuestionNumber) {
		super();
		this.quizzId = quizzId;
		this.quizzQuestionNumber = quizzQuestionNumber;
	}

	public Long getQuizzId() {
		return quizzId;
	}

	public void setQuizzId(Long quizzId) {
		this.quizzId = quizzId;
	}

	public int getQuizzQuestionNumber() {
		return quizzQuestionNumber;
	}

	public void setQuizzQuestionNumber(int quizzQuestionNumber) {
		this.quizzQuestionNumber = quizzQuestionNumber;
	}

	@Override
	public String toString() {
		return "QuizzInfo [quizzId=" + quizzId + ", quizzQuestionNumber=" + quizzQuestionNumber + "]";
	}

}
