import { Projet } from './projet.model';
export class ProjetWrapper {
  _embedded!: { genres: Projet[] };
}
