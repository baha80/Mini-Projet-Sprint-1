import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur.model';
import { AuthService } from '../services/auth.service';
import { DeveloppeurService } from '../services/developpeur.service';

@Component({
  selector: 'app-developpeurs',
  templateUrl: './developpeurs.component.html',
})
export class DeveloppeursComponent implements OnInit {
  developpeurs?: Developpeur[];
  constructor(
    private developpeurService: DeveloppeurService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerDeveloppeurs();
  }

  chargerDeveloppeurs() {
    this.developpeurService.listeDeveloppeurs().subscribe((dev) => {
      console.log(dev);
      this.developpeurs = dev;
    });
  }

  supprimerDeveloppeur(dev: Developpeur) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.developpeurService.supprimerDeveloppeur(dev.idDev).subscribe(() => {
        console.log('sport supprimé');
        this.chargerDeveloppeurs();
      });
  }
}
