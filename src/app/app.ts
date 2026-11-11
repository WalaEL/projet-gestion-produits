import { Component } from '@angular/core';
import { ListeProduits } from './liste-produits/liste-produits';

@Component({
  selector: 'app-root',
  imports: [ListeProduits],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}