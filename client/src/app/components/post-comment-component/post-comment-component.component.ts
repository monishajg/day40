import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-post-comment-component',
  templateUrl: './post-comment-component.component.html',
  styleUrls: ['./post-comment-component.component.css']
})
export class PostCommentComponentComponent implements OnInit, OnDestroy {
  commentForm!: FormGroup
  aRouteSub$!: Subscription
  
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchServiceService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.aRouteSub$.unsubscribe()
  }
  
  async ngOnInit() {
    this.commentForm = this.createForm()
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
  }
  
  back(){
    this.router.navigate(['/search'])
  }
}
