import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../models/product.model";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() product!: ProductModel;
  detailProduct!: ProductModel;

  constructor(public storeService: StoreService, private activatedRoute: ActivatedRoute) {
    const {id} = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(product => product.id == parseInt(id)) as ProductModel;
    console.log(this.detailProduct);
  }

  addToCart() {
    this.storeService.addToCart(this.detailProduct);
  }
}
