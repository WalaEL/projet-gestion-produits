import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitDetails } from './produit-details';
import { provideRouter } from '@angular/router';
describe('ProduitDetails', () => {
  let component: ProduitDetails;
  let fixture: ComponentFixture<ProduitDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
