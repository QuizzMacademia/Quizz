package quizz.demo.model.entities;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "category")
	private String category;

	@LazyCollection(LazyCollectionOption.FALSE)
	@ManyToMany
	@JsonBackReference // quand on a une relation bidirectionnelle
	private List<Theme> themes = new ArrayList<>();

//	@LazyCollection(LazyCollectionOption.FALSE)
//	@OneToMany(cascade = CascadeType.ALL)
//	private List<Quizz> quizzes = new ArrayList<>();

	public Category() {

	}

	public Category(long id, String category, List<Theme> themes) {
		super();
		this.id = id;
		this.category = category;
		this.themes = themes;
//		this.quizzes = quizzes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public List<Theme> getThemes() {
		return themes;
	}

	public void setThemes(List<Theme> themes) {
		this.themes = themes;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", category=" + category + ", themes=" + themes  + "]";
	}

}
