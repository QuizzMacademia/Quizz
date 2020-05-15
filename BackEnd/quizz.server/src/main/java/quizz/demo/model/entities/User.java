package quizz.demo.model.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

import java.util.Date;

@Entity
@Table (name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Size(min=2, max=20, message="firstName must betweem 2 and 20 characters")
    private String firstName;
    @Size(min=2, max=20, message="lastName must be between 2 and 20 characters")
    private String secondName;
    @Size(min=8, max=20, message="password must be at least 8 characters and at max 20")
    //@Column(name = "pass_word")
    private String password;
    @PastOrPresent
    private Date birthDate;
    @NotNull
	@Email
    private String email;
    private String mobileNumber;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(long id,
			@Size(min = 2, max = 20, message = "firstName must betweem 2 and 20 characters") String firstName,
			@Size(min = 2, max = 20, message = "lastName must be between 2 and 20 characters") String secondName,
			@Size(min = 8, message = "passWord must be al least 8 characters") String password,
			@PastOrPresent Date birthDate, @Email String email, String mobileNumber) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.secondName = secondName;
		this.password = password;
		this.birthDate = birthDate;
		this.email = email;
		this.mobileNumber = mobileNumber;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getSecondName() {
		return secondName;
	}
	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}
	
	
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", secondName=" + secondName + ", password=" + password
				+ ", birthDate=" + birthDate + ", email=" + email + ", mobileNumber=" + mobileNumber + "]";
	}
    
}
