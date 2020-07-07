package quizz.demo.tools.json;

import java.lang.reflect.Type;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import quizz.demo.model.entities.Quizz;

public class QuizzAdapter implements JsonDeserializer<Quizz> {

	@Override
	public Quizz deserialize(JsonElement jsonElement, Type typeOfT, JsonDeserializationContext context)
			throws JsonParseException {
		final Quizz quizz = new GsonBuilder().setPrettyPrinting().create().fromJson(jsonElement, Quizz.class);

		return quizz;
	}

}
