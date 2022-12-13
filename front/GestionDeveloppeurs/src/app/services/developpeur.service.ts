import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Developpeur } from '../model/developpeur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjetWrapper } from '../model/projetWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class DeveloppeurService {
  developpeurs!: Developpeur[]; //un tableau de Sport
  apiURL: string = 'http://localhost:8182/developpeurs/api';
  apiURLGN: string = 'http://localhost:8080/developpeurs/gn';

  constructor(private http: HttpClient) {}

  listeDeveloppeurs(): Observable<Developpeur[]> {
    return this.http.get<Developpeur[]>(this.apiURL);
  }

  ajouterDeveloppeur(dev: Developpeur): Observable<Developpeur> {
    return this.http.post<Developpeur>(this.apiURL, dev, httpOptions);
  }

  supprimerDeveloppeur(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterDeveloppeur(id: number): Observable<Developpeur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Developpeur>(url);
  }

  updateDeveloppeur(dev: Developpeur): Observable<Developpeur> {
    return this.http.put<Developpeur>(this.apiURL, dev, httpOptions);
  }

  trierdeveloppeurs() {
    this.developpeurs = this.developpeurs.sort((n1, n2) => {
      if (n1.idDev! > n2.idDev!) {
        return 1;
      }
      if (n1.idDev! < n2.idDev!) {
        return -1;
      }
      return 0;
    });
  }

  listeProjets(): Observable<ProjetWrapper> {
    return this.http.get<ProjetWrapper>(this.apiURLGN);
  }

  rechercherParProjet(idG: number): Observable<Developpeur[]> {
    const url = `${this.apiURL}/devgn/${idG}`;
    return this.http.get<Developpeur[]>(url);
  }

  rechercherParNom(nom: string): Observable<Developpeur[]> {
    const url = `${this.apiURL}/devsByName/${nom}`;
    return this.http.get<Developpeur[]>(url);
  }

  ajouterProjet(gn: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.apiURLGN, gn, httpOptions);
  }
}
