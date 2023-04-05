package ibf2022.batch1.csf.assessment.server.services;

import java.io.StringReader;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import ibf2022.batch1.csf.assessment.server.models.Review;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonReader;;

@Service
public class MovieService {

	// TODO: Task 4
	// DO NOT CHANGE THE METHOD'S SIGNATURE
	public static final String MOVIE_REV_API = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
	public static final String PUBLIC_KEY = "kwQreBP5ts1AK2Ao8R56htKVaph8mDWG";
	
	@Value("${private.key}")
	private String privateKey;
	
	public List<Review> searchReviews(String query) throws NoSuchAlgorithmException {
		String url = UriComponentsBuilder.fromUriString(MOVIE_REV_API)
		.queryParam("query",query.trim()) 
		.queryParam("apikey", PUBLIC_KEY.trim())
		.toUriString();
		
		// REQUEST CONTAINER
        RequestEntity<Void> request = RequestEntity.get(url)
                .accept(MediaType.APPLICATION_JSON)
                .build();
        
        RestTemplate template = new RestTemplate();
        String payload = "";
		try {
            ResponseEntity<String> response = template.exchange(request, String.class);
            payload = response.getBody();
        } catch (RestClientException ex) {
            System.err.println(ex);
            // ex.printStackTrace();
            // return Collections.EMPTY_LIST;
        }
        // READ PAYLOAD
        JsonReader reader = Json.createReader(new StringReader(payload));
        JsonObject reviewResp = reader.readObject();
        JsonObject data = reviewResp.getJsonObject("data");
        JsonArray results = data.getJsonArray("results");

        return results.stream()
                .map(v -> v.asJsonObject())
                .map(Review::toReview)
                .toList();
    }
		
}
