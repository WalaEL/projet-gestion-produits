import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-produit-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produit-details.html',
  styleUrl: './produit-details.css'
})
export class ProduitDetails implements OnInit, OnDestroy {
  productId = signal<number | null>(null);
  produit = signal<Produit | undefined>(undefined);
  private routeSub!: Subscription;

  products: Produit[] = [
    { id: 1, nom: 'Laptop HP Pavilion',        prix: 1299.99, quantite: 15, urlImg: 'https://picsum.photos/seed/laptop/150/150',   enPromo: false },
    { id: 2, nom: 'Souris Logitech MX Master',  prix: 79.90,   quantite: 42, urlImg: 'https://picsum.photos/seed/mouse/150/150',    enPromo: true  },
    { id: 3, nom: 'Clavier Mécanique RGB',      prix: 129.00,  quantite: 0,  urlImg: 'https://picsum.photos/seed/keyboard/150/150', enPromo: false },
    { id: 4, nom: 'Écran 27" 4K Samsung',       prix: 449.50,  quantite: 8,  urlImg: 'https://picsum.photos/seed/monitor/150/150',  enPromo: true  },
    { id: 5, nom: 'Casque Audio Sony WH',       prix: 249.99,  quantite: 23, urlImg: 'https://picsum.photos/seed/headset/150/150',  enPromo: false }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const id = Number(idParam);
        this.productId.set(id);
        this.produit.set(this.products.find(p => p.id === id));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  retournerVersCatalogue(): void {
    this.router.navigate(['/products']);
  }
}