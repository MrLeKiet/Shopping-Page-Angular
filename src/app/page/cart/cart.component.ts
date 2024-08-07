import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {ProductModel} from '../../models/product.model';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: ProductModel[] = [];

  constructor(public storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }
}
