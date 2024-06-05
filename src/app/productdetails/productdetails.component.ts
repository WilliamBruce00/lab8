import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { StarComponent } from '../star/star.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.route.queryParams.subscribe({
      next: (value: any) => {
        this.product = value;
      },
    });
  }

  onBack(): void {}
}
