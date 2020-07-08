package quizz.demo.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.springframework.lang.NonNull;

public class RegisterForm {

	@NonNull
	@Size(min = 8, max = 20)
	private String password;

	@NonNull
	@Email
	private String email;

	public RegisterForm() {

	}

	public RegisterForm(@Size(min = 8, max = 20) String password, @Email String email) {
		super();
		this.password = password;
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "RegisterForm [password=" + password + ", email=" + email + "]";
	}
}
