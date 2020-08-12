package quizz.demo.tools.json;

import java.lang.reflect.Type;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import quizz.demo.model.entities.Question;

public class QuestionAdapter implements JsonDeserializer<Question> {

	@Override
	public Question deserialize(JsonElement jsonElement, Type typeOfT, JsonDeserializationContext context)
			throws JsonParseException {
		final Question question = new GsonBuilder().setPrettyPrinting().create().fromJson(jsonElement, Question.class);
		return question;
	}

}
