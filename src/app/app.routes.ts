import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { ListeProduits } from './liste-produits/liste-produits';
import { ProduitDetails } from './produit-details/produit-details';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'products', component: ListeProduits },
  { path: 'products/:id', component: ProduitDetails },
  { path: '**', component: PageNotFound }
];