import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedNewsComponent } from './components/feed-news/feed-news.component';

const routes: Routes = [
  { path: '', component: FeedNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
