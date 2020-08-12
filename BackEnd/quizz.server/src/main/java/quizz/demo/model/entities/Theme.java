package quizz.demo.model.entities;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
public class Theme {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String theme;

	@LazyCollection(LazyCollectionOption.FALSE)
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Category> categories = new ArrayList<>();

//	@LazyCollection(LazyCollectionOption.FALSE)
//	@OneToMany(cascade = CascadeType.ALL) // je mets une cascade parceque une category peut exister sans un quizz
//	private List<Quizz> quizzes = new ArrayList<>();

	public Theme() {
		super();
	}

	public Theme(long id, String theme, List<Category> categories) {
		super();
		this.id = id;
		this.theme = theme;
		this.categories = categories;
		//this.quizzes = quizzes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	@Override
	public String toString() {
		return "Theme [id=" + id + ", theme=" + theme + ", categories=" + categories + "]";
	}

}
