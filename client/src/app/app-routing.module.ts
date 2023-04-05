import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReviewComponentComponent } from './components/search-review-component/search-review-component.component';

const routes: Routes = [
  { path: '', component: SearchReviewComponentComponent},
  // { path: 'search', component: }
  { path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
