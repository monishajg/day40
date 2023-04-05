import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-search-review-component',
  templateUrl: './search-review-component.component.html',
  styleUrls: ['./search-review-component.component.css']
})
export class SearchReviewComponentComponent implements OnInit {

  searchForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchSvc: SearchServiceService ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: this.fb.control<string>('', [Validators.required, Validators.minLength(2),
        Validators.required, Validators.pattern(/^\S.*\S$/)]),
    })
  }
  
  search() {
    console.log("searchTerm > ", this.searchForm.value.movie)
    this.searchSvc.searched = this.searchForm.value.movie
    this.router.navigate(["search"], {
    })
  }

}