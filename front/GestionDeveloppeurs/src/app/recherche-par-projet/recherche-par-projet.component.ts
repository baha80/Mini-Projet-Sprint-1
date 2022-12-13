import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Developpeur } from '../model/developpeur.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-recherche-par-projet',
  templateUrl: './recherche-par-projet.component.html',
  styles: [],
})
export class RechercheParProjetComponent implements OnInit {
  developpeurs!: Developpeur[];
  IdProjet!: number;
  projets!: Projet[];

  constructor(private sportService: DeveloppeurService) {}

  ngOnInit(): void {
    this.sportService.listeProjets().subscribe((gn) => {
      this.projets = gn._embedded.genres;
      console.log(gn);
    });
  }

  onChange() {
    this.sportService.rechercherParProjet(this.IdProjet).subscribe((spts) => {
      this.developpeurs = spts;
    });
  }
}
