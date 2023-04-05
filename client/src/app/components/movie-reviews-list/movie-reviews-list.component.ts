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
  
  back() {
    // if (this.offset >= this.limit) {
    //   this.offset -= this.limit
    // }
    // console.debug("new offset > " + this.offset)
    // // trigger service
    // this.searchSvc.getCharList(this.search, this.limit, this.offset).then(
    //   v => this.characterList = v
    // )
    // console.info(this.characterList)
  }
  
  next(){
    this.router.navigate(['/comment'])
  }
  
}
