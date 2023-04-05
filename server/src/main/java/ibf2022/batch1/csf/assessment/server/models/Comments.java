package ibf2022.batch1.csf.assessment.server.models;

public class Comments {
    // private int commentId;
    private String title;
    private String name;
    private int rating;
    private String comment;

    // public int getCommentId() {
    //     return this.commentId;
    // }

    // public void setId(int commentId) {
    //     this.commentId = commentId;
    // }
    
    // public void setCommentId(int commentId) {
    //     this.commentId = commentId;
    // }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return this.rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
    
    @Override
	public String toString() {
		return "Comment{commentId=%s, title=%s, name=%s, comment=%s, rating=%d"
				.formatted(title, name, rating, comment);
	}
}
