package quizz.demo.tools.json;

import java.lang.reflect.Type;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

import quizz.demo.model.entities.Category;

public class CategoryAdapter implements JsonDeserializer<Category> {

	@Override
	public Category deserialize(JsonElement jsonElement, Type typeOfT, JsonDeserializationContext context)
			throws JsonParseException {
		final Category category = new GsonBuilder().setPrettyPrinting().create().fromJson(jsonElement, Category.class);
		return category;
	}

}
