package quizz.demo.tools.json;

import java.lang.reflect.Type;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import quizz.demo.model.entities.Theme;

public class ThemeAdapter implements JsonDeserializer<Theme> {

	@Override
	public Theme deserialize(JsonElement jsonElement, Type typeOfT, JsonDeserializationContext context)
			throws JsonParseException {
		final Theme theme = new GsonBuilder().setPrettyPrinting().create().fromJson(jsonElement, Theme.class);
		return theme;
	}

}
