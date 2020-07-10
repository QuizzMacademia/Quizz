package quizz.demo.request;

import javax.persistence.Lob;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.springframework.lang.NonNull;

import com.sun.istack.NotNull;

public class RegisterForm {

	
 	@Size(min = 8,max=40)
	@Lob
	private String password;
	
	
	@Size(min = 8,max=40)
	@Lob
	private String passwordConfirmation;

	@NonNull
	@Email
	private String email;

	public RegisterForm() {

	}

	public RegisterForm(@Size(min = 8, max = 20) String password, @Size(min = 8, max = 20) String passwordConfirmation,
			@Email String email) {
		super();
		this.password = password;
		this.passwordConfirmation = passwordConfirmation;
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}

	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "RegisterForm [password=" + password + ", passwordConfirmation=" + passwordConfirmation + ", email="
				+ email + "]";
	}
	
}
