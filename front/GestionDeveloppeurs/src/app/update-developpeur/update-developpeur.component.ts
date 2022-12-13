import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Developpeur } from '../model/developpeur.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-update-developpeur',
  templateUrl: './update-developpeur.component.html',
  styles: [],
})
export class UpdateDeveloppeurComponent implements OnInit {
  currentDeveloppeur = new Developpeur();
  projets!: Projet[];
  updatedPojId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private developpeurService: DeveloppeurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.developpeurService.listeProjets().subscribe((gn) => {
      console.log(gn);
      this.projets = gn._embedded.genres;   //////////////////////////projets
    });
    this.developpeurService
      .consulterDeveloppeur(this.activatedRoute.snapshot.params['id'])
      .subscribe((dev) => {
        this.currentDeveloppeur = dev;
        this.updatedPojId = this.currentDeveloppeur.projet.idPoj;
      });
  }
  updateDeveloppeur() {
    this.currentDeveloppeur.projet = this.projets.find(
      (gn) => gn.idPoj == this.updatedPojId
    )!;
    this.developpeurService
      .updateDeveloppeur(this.currentDeveloppeur)
      .subscribe((dev) => {
        this.router.navigate(['developpeurs']);
      });
  }
}
