package ibf2022.batch1.csf.assessment.server.models;

import jakarta.json.JsonObject;

// DO NOT MODIFY THIS CLASS
public class Review {
	// display_title
	private String title;
	// mpaa_rating
	private String rating;
	// byline
	private String byline;
	// headline
	private String headline;
	// summary_short 
	private String summary;
	// link.url
	private String reviewURL;
	// multimedia.src
	private String image = null;

	private int commentCount = 0;

	public void setTitle(String title) { this.title = title; }
	public String getTitle() { return this.title; }

	public void setRating(String rating) { this.rating = rating; }
	public String getRating() { return this.rating; }

	public void setByline(String byline) { this.byline = byline; }
	public String getByline() { return this.byline; }

	public void setHeadline(String headline) { this.headline = headline; }
	public String getHeadline() { return this.headline; }

	public void setSummary(String summary) { this.summary = summary; }
	public String getSummary() { return this.summary; }

	public void setReviewURL(String reviewURL) { this.reviewURL = reviewURL; }
	public String getReviewURL() { return this.reviewURL; }

	public void setImage(String image) { this.image = image; }
	public String getImage() { return this.image; }
	public boolean hasImage() { return null != this.image; }

	public void setCommentCount(int commentCount) { this.commentCount = commentCount; };
	public int getCommentCount() { return this.commentCount; }


	@Override
	public String toString() {
		return "Review{title:%s, rating:%s}".formatted(title, rating);
	}
	
	public static Review toReview (JsonObject obj) {
        Review Review = new Review();
        Review.setTitle(obj.getString("display_title"));
        Review.setRating(obj.getString("mpaa_rating"));
        Review.setByline(obj.getString("byline"));
        Review.setHeadline(obj.getString("headline"));
        Review.setSummary(obj.getString("summary_short"));
        Review.setReviewURL("%s.%s".formatted(obj.getString("link"), obj.getString("url")));
        JsonObject multimedia = obj.getJsonObject("image");
        Review.setImage("%s.%s".formatted(multimedia.getString("multimedia"), multimedia.getString("src")));
        return Review;
    }
}
