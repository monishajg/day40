package ibf2022.batch1.csf.assessment.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.mongodb.client.result.UpdateResult;

import ibf2022.batch1.csf.assessment.server.models.Comments;

@Repository
public class MovieRepository {

	public static final String COLLECTION_COMMENTS = "comments";
	public static final String FIELD_COMMENTID = "commentId";
	
	@Autowired
	private MongoTemplate template;
	
	// TODO: Task 5
	// You may modify the parameter but not the return type
	// Write the native mongo database query in the comment below
	// db.comments.find({}).count(); //db.comments.countDocuments();
	public int countComments(Object Comments) {
		
		return 0;
	}

	// TODO: Task 8
	// Write a method to insert movie comments comments collection
	// Write the native mongo database query in the comment below
	// db.comments.insertOne(comments)
	public void insertComment(Comments comments) {
		Criteria criteria = Criteria.where("title").is(comments.getTitle());
        Query query = new Query(criteria);
        
        Update updateOps = new Update().push("comments").each(comments);
        UpdateResult updateResult = template.updateFirst(query, updateOps, COLLECTION_COMMENTS);
        if (updateResult == null)
            System.out.println("not updated");
        else
        System.out.println(updateResult.getModifiedCount()+"document(s) updated..");
	}
}
