package ibf2022.batch1.csf.assessment.server.utils;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class MyJson {

    public static JsonObject jsonParse(String s) {
        JsonReader jsonReader = Json.createReader(new StringReader(s));
        JsonObject jObj = jsonReader.readObject();
        return jObj;
    }
}
