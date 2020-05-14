package quizz.demo.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

public class LoginForm {

	@NotNull
	@Size(min=8,max=20)
	private String password;
	
	@NotNull
	@Email
	private String email;

	public LoginForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginForm(@Size(min = 8, max = 20) String password, @Email String email) {
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
		return "LoginForm [password=" + password + ", email=" + email + "]";
	}
	
}
