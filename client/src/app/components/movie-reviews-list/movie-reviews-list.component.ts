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
export class MovieReviewsListComponent implements OnInit, OnDestroy {
  aRouteSub$!: Subscription
  search!: string
  reviewList: Review[] = []
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchServiceService,
    private router: Router) { }
    
  ngOnDestroy(): void {
    this.aRouteSub$.unsubscribe()
  }
  
  async ngOnInit() {
    this.aRouteSub$ = this.activatedRoute.queryParams.subscribe(
      queryparams => this.search = queryparams['search']
    )
    console.debug("searching for.. ", this.search)
    // get char list promise
    await this.searchSvc.getRevList(this.search)
      .then(v => this.reviewList = v)
    console.info(this.reviewList)
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
  }
  
}
