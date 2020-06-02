package quizz.demo.tools.json;

import java.lang.reflect.Type;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import quizz.demo.model.entities.User;

public class UserAdapter implements JsonDeserializer <User> {

	@Override
	public User deserialize(JsonElement jsonElement, Type typeOfT, JsonDeserializationContext context)
			throws JsonParseException {
			// Convertie le json en user
				final User user = new GsonBuilder().setPrettyPrinting().create()
				    .fromJson(jsonElement, User.class);
		return user;
	}

}
