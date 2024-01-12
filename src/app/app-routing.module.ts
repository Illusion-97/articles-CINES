import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ArticleEditorComponent } from './view/article-editor/article-editor.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import {LandingComponent} from "./view/landing/landing.component";
import {AuthGuard} from './guards/auth.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PanierComponent } from './components/panier/panier.component';
import { DetailArticleComponent } from './view/detail-article/detail-article.component';
import { ArticlesService, articleByIdResolver } from './services/articles.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: DetailArticleComponent, resolve: { article: articleByIdResolver } },
  { path: 'articles', component: ArticleEditorComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard], children: [
    { path: '', component: UserDetailsComponent },
    { path: 'panier', component: PanierComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
