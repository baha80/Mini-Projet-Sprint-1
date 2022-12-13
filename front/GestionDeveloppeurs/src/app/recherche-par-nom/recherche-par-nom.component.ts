import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [],
})
export class RechercheParNomComponent implements OnInit {
  nomDev!: string;
  developpeurs!: Developpeur[];
  allDeveloppeurs!: Developpeur[];
  searchTerm!: string;

  constructor(private sportService: DeveloppeurService) {}

  ngOnInit(): void {
    this.sportService.listeDeveloppeurs().subscribe((spt) => {
      console.log(spt);
      this.developpeurs = spt;
    });
  }

  onKeyUp(filterText: string) {
    this.developpeurs = this.allDeveloppeurs.filter((item) =>
      item.nomDev.toLowerCase().includes(filterText)
    );
  }

  rechercherSpts() {
    this.sportService.rechercherParNom(this.nomDev).subscribe((spts) => {
      this.developpeurs = spts;
      console.log(spts);
    });
  }
}
