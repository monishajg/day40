import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-review-component',
  templateUrl: './search-review-component.component.html',
  styleUrls: ['./search-review-component.component.css']
})
export class SearchReviewComponentComponent {

  searchForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: this.fb.control<string>('', [Validators.required, Validators.minLength(2)]),
    })
  }
  
  search() {
  
    const search = this.searchForm.value['search']
    console.log("searchTerm > ", search)
    this.router.navigate(['/search'], {
      queryParams: { search }
    })
  }

}