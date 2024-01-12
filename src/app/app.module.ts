import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './view/home/home.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { ArticleEditorComponent } from './view/article-editor/article-editor.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import { RegisterComponent } from './view/register/register.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoginComponent } from './view/login/login.component';
import { LandingComponent } from './view/landing/landing.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PanierComponent } from './components/panier/panier.component';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { ListCommandesComponent } from './components/list-commandes/list-commandes.component';
import { DetailArticleComponent } from './view/detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    ListArticlesComponent,
    ArticleEditorComponent,
    HeaderComponent,
    RegisterComponent,
    PaginationComponent,
    LoginComponent,
    LandingComponent,
    UserDetailsComponent,
    PanierComponent,
    AuthMenuComponent,
    ListCommandesComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
