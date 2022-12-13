import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { AuthService } from '../services/auth.service';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [],
})
export class ListeGenresComponent implements OnInit {
  projets!: Projet[];
  ajout: boolean = true;
  updatedGn: Projet = {
    idPoj: 0,
    nomPoj: '',
    descriptionPoj: '',
  };

  constructor(
    private sportService: DeveloppeurService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sportService.listeProjets().subscribe((gns) => {
      this.projets = gns._embedded.genres;
      console.log(gns);
    });
  }

  chargerGenres() {
    this.sportService.listeProjets().subscribe((gns) => {
      this.projets = gns._embedded.genres;
      console.log(gns);
    });
  }

  genreUpdated(gn: Projet) {
    console.log('gn updated event', gn);
    this.sportService.ajouterProjet(gn).subscribe(() => this.chargerGenres());
  }

  updateGn(gn: Projet) {
    this.updatedGn = gn;
    this.ajout = false;
  }
}
