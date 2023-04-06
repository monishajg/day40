import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comments } from 'src/app/models/Comments';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-post-comment-component',
  templateUrl: './post-comment-component.component.html',
  styleUrls: ['./post-comment-component.component.css']
})
export class PostCommentComponentComponent implements OnInit, OnDestroy {
  commentForm!: FormGroup
  aRouteSub$!: Subscription
  reviewTitle!: string
  comment!: Comments
  
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchServiceService,
    private router: Router) { }

  ngOnDestroy(): void {
    // this.aRouteSub$.unsubscribe()
  }
  
  async ngOnInit() {
    console.log(">>> inside post-comment-component ...")
    this.commentForm = this.createForm()
    this.aRouteSub$ = this.activatedRoute.params.subscribe((params) => {
      this.reviewTitle = params['title']
    })
    console.log(">>> reviewTitle: ", this.reviewTitle)
  }
  
  
  
  isCommentFormInvalid(ctrlName: string): boolean {
    const ctrl = this.commentForm.get(ctrlName) as FormControl
    return ctrl.invalid
  }
  
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      rating: this.fb.control<string>('', [Validators.required]),
      comment: this.fb.control<string>('', [Validators.required])
  })
  }
  
  postComment(){
    console.log(">>> inside post comment...")
    const c = {} as Comments
    c.title = this.reviewTitle
    c.name = this.commentForm.value.name
    c.rating = this.commentForm.value.rating
    c.comment = this.commentForm.value.comment
    console.log('>>> comment object: ', c);
    this.searchSvc.postComment(this.commentForm.value.title,this.commentForm.value.name,this.commentForm.value.rating,this.commentForm.value.comment)
    this.router.navigate(['/search']);
  }
  
  back(){
    console.log("searchTerm:" ,this.searchSvc.searched)
    this.router.navigate(['/search']);
  }
}
