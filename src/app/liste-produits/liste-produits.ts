import { Component } from '@angular/core';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste-produits',
  imports: [FormsModule, NgClass, NgStyle, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './liste-produits.html',
  styleUrl: './liste-produits.css'
})
export class ListeProduits {
  titre: string = 'Catalogue des Produits';
  afficherImages: boolean = true;
  filtre: string = '';

  products: Produit[] = [
    { id: 1, nom: 'Laptop HP Pavilion',        prix: 1299.99, quantite: 15, urlImg: 'https://picsum.photos/seed/laptop/150/150',   enPromo: false },
    { id: 2, nom: 'Souris Logitech MX Master',  prix: 79.90,   quantite: 42, urlImg: 'https://picsum.photos/seed/mouse/150/150',    enPromo: true  },
    { id: 3, nom: 'Clavier Mécanique RGB',      prix: 129.00,  quantite: 0,  urlImg: 'https://picsum.photos/seed/keyboard/150/150', enPromo: false },
    { id: 4, nom: 'Écran 27" 4K Samsung',       prix: 449.50,  quantite: 8,  urlImg: 'https://picsum.photos/seed/monitor/150/150',  enPromo: true  },
    { id: 5, nom: 'Casque Audio Sony WH',       prix: 249.99,  quantite: 23, urlImg: 'https://picsum.photos/seed/headset/150/150',  enPromo: false }
  ];

  // Q4 : afficher / masquer les images
  toggleImages(): void {
    this.afficherImages = !this.afficherImages;
  }

  // Q8 : filtrage en temps réel
  get filteredProducts(): Produit[] {
    if (!this.filtre) {
      return this.products;
    }
    const terme = this.filtre.toLowerCase();
    return this.products.filter(p => p.nom.toLowerCase().includes(terme));
  }

  // Q9 (bonus) : supprimer un produit
  supprimerProduit(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}