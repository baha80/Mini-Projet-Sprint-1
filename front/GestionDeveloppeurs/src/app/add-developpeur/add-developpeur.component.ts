import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Developpeur } from '../model/developpeur.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-add-developpeur',
  templateUrl: './add-developpeur.component.html',
})
export class AddDeveloppeurComponent implements OnInit {
  newDeveloppeur = new Developpeur();
  projets!: Projet[];
  newIdPoj!: number;
  newProjet!: Projet;

  constructor(
    private developpeurService: DeveloppeurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.developpeurService.listeProjets().subscribe((gn) => {
      this.projets = gn._embedded.genres; //////////////projets
      console.log(gn);
    });
  }

  addDeveloppeur() {
    this.newDeveloppeur.projet = this.projets.find(
      (gn) => gn.idPoj == this.newIdPoj
    )!;
    this.developpeurService
      .ajouterDeveloppeur(this.newDeveloppeur)
      .subscribe((dev) => {
        console.log(dev);
        this.router.navigate(['developpeurs']);
      });
  }
}
