import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloppeursComponent } from './developpeurs/developpeurs.component';
import { AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import { UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';
import { RechercheParProjetComponent } from './recherche-par-projet/recherche-par-projet.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
//import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { DeveloppeurGuard } from './sport.guard';

const routes: Routes = [
  { path: 'developpeurs', component: DeveloppeursComponent },
  // {
  //   path: 'add-developpeur',
  //   component: AddDeveloppeurComponent,
  //   canActivate: [DeveloppeurGuard],
  // },
  { path: 'updateDeveloppeur/:id', component: UpdateDeveloppeurComponent },
  { path: 'rechercheParProjet', component: RechercheParProjetComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  //{ path: 'listeProjets', component: ListeProjetsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'sports', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
