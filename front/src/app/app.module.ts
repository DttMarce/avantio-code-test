import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedNewsComponent } from './components/feed-news/feed-news.component';
import { SidebarNewspaperComponent } from './components/sidebar-newspaper/sidebar-newspaper.component';
import { SelectNewspaperButtonComponent } from './components/sidebar-newspaper/select-newspaper-button/select-newspaper-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedNewsComponent,
    SidebarNewspaperComponent,
    SelectNewspaperButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
