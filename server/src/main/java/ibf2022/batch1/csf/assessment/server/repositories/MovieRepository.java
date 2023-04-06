package ibf2022.batch1.csf.assessment.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import ibf2022.batch1.csf.assessment.server.models.Comments;

@Repository
public class MovieRepository {

	public static final String COLLECTION_COMMENTS = "comments";
	// public static final String FIELD_COMMENTID = "commentId";
	
	@Autowired
	private MongoTemplate template;
	
	// TODO: Task 5
	// You may modify the parameter but not the return type
	// Write the native mongo database query in the comment below
	// db.comments.find({}).count(); //db.comments.countDocuments();
	// db.comments.find({title: ???}).count()
	public int countComments(String title) {
		Query query = Query.query(Criteria.where("title").is(title));        
		Long comment = template.count(query, COLLECTION_COMMENTS);
		Integer result = comment.intValue();
		return result;
	}

	// TODO: Task 8
	// Write a method to insert movie comments comments collection
	// Write the native mongo database query in the comment below
	// db.comments.insertOne(comments)
	public void insertComment(Comments comments) {
        template.insert(comments, COLLECTION_COMMENTS);
	}
}
