import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedNewsComponent } from './components/feed-news/feed-news.component';
import { SidebarNewspaperComponent } from './components/sidebar-newspaper/sidebar-newspaper.component';
import { SelectNewspaperButtonComponent } from './components/sidebar-newspaper/select-newspaper-button/select-newspaper-button.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { ButtonCircleComponent } from './components/shared/buttons/button-circle/button-circle.component';
import { SidebarSlideOutComponent } from './components/shared/sidebar-slide-out/sidebar-slide-out.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { PrincipalButtonComponent } from './components/shared/buttons/principal-button/principal-button.component';
import { SecondaryButtonComponent } from './components/shared/buttons/secondary-button/secondary-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeedNewsComponent,
    SidebarNewspaperComponent,
    SelectNewspaperButtonComponent,
    DetailViewComponent,
    ButtonCircleComponent,
    SidebarSlideOutComponent,
    AddNewComponent,
    PrincipalButtonComponent,
    SecondaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
