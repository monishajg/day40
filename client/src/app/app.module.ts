import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchReviewComponentComponent } from './components/search-review-component/search-review-component.component';
import { MovieReviewsListComponent } from './components/movie-reviews-list/movie-reviews-list.component';
import { PostCommentComponentComponent } from './components/post-comment-component/post-comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchReviewComponentComponent,
    MovieReviewsListComponent,
    PostCommentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
