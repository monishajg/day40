import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReviewComponentComponent } from './components/search-review-component/search-review-component.component';
import { MovieReviewsListComponent } from './components/movie-reviews-list/movie-reviews-list.component';
import { PostCommentComponentComponent } from './components/post-comment-component/post-comment-component.component';

const routes: Routes = [
  { path: '', component: SearchReviewComponentComponent},
  { path: 'search', component: MovieReviewsListComponent},
  { path: 'comment', component: PostCommentComponentComponent},
  { path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
