package ibf2022.batch1.csf.assessment.server.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ibf2022.batch1.csf.assessment.server.models.Comments;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.repositories.MovieRepository;
import ibf2022.batch1.csf.assessment.server.services.MovieService;
import jakarta.json.JsonObject;

@Controller
@ResponseBody
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class MovieController {

	// TODO: Task 3, Task 4, Task 8
	
	@Autowired
	private MovieService movieSvc;
	@Autowired
	private MovieRepository movieRepo;

	// TASK 3, 4
	@GetMapping(path = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> searchReviews(@RequestParam String query) throws NoSuchAlgorithmException {

		List<Review> review = movieSvc.searchReviews(query);

		// return ResponseEntity.ok(arrBuilder.build().toString());

		List<JsonObject> output = review.stream()
				.map(v -> v.toJsonObject())
				.toList();

		return ResponseEntity
				.status(HttpStatus.OK)
				.contentType(MediaType.APPLICATION_JSON)
				.body(output.toString());

	}
	
	// TODO: Task 8
	@PostMapping(path = "/comment"
	// , consumes = MediaType.APPLICATION_JSON_VALUE
	)
	public void postComment(@RequestBody MultiValueMap<String, String> form) {
		Comments c = new Comments();
		c.setTitle(form.getFirst("title"));
		c.setName(form.getFirst("name"));
		c.setRating(Integer.parseInt(form.getFirst("rating")));
		c.setComment(form.getFirst("comment"));

		movieRepo.insertComment(c);
	} 

}
