import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeProduits } from './liste-produits';
import { provideRouter } from '@angular/router';

describe('ListeProduits', () => {
  let component: ListeProduits;
  let fixture: ComponentFixture<ListeProduits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProduits],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeProduits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
