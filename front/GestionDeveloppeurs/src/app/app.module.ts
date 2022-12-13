import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloppeursComponent } from './developpeurs/developpeurs.component';
import { AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import { UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';
import { HttpClientModule } from '@angular/common/http';
//import { RechercheParGenreComponent } from './recherche-par-projet/recherche-par-projet.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeGenresComponent } from './liste-projets/liste-projets.component';
//import { UpdateGenreComponent } from './update-projet/update-projet.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloppeursComponent,
    AddDeveloppeurComponent,
    UpdateDeveloppeurComponent,
   // RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeGenresComponent,
    //UpdateGenreComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
