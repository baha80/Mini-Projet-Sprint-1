import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styles: [],
})
export class UpdateProjetComponent implements OnInit {
  @Input()
  ajout!: boolean;
  @Input()
  projet!: Projet;

  @Output()
  genreUpdated = new EventEmitter<Projet>();

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnit du composant UpdateGenre', this.projet);
  }

  saveGenre() {
    this.genreUpdated.emit(this.projet);
  }
}
