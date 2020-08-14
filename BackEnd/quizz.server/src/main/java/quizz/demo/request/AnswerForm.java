package quizz.demo.request;

public class AnswerForm {
	String theme;
	String code;

	public AnswerForm(String theme, String code) {
		super();
		this.theme = theme;
		this.code = code;
	}

	public AnswerForm() {

	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "AnswerForm [theme=" + theme + ", code=" + code + "]";
	}

}
