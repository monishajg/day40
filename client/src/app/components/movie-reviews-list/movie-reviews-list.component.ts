import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/Review';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-movie-reviews-list',
  templateUrl: './movie-reviews-list.component.html',
  styleUrls: ['./movie-reviews-list.component.css']
})
export class MovieReviewsListComponent implements OnInit {

  reviewList: Review[] = []
  noresult: string = 'moment...'
  
  constructor(
    private searchSvc: SearchServiceService,
    private router: Router) { }

  
  ngOnInit(): void {
      this.searchSvc.getRevList(this.searchSvc.searched)
        .then(response => {
          this.reviewList = response as Review[]

          // if (this.reviews.length === 0){
          //   this.noresult = "Your search produces no result"
          // } else {
            this.noresult = ""
          // }      
        })
        .catch((err)=>{
          console.log(err)
          this.noresult = "Your search produces no result"
          console.log(this.noresult)
        })

  }
  
  comment(reviewTitle: string){
    this.router.navigate(["/comment/" + reviewTitle])
  }
  
}
