import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { FeedNewsComponent } from './components/feed-news/feed-news.component';

const routes: Routes = [
  { path: '', component: FeedNewsComponent },
  { path: ':newspaper', component: FeedNewsComponent },
  { path: ':newspaper/:id', component: DetailViewComponent },
  { path: '**', component: FeedNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
