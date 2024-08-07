import {Routes} from '@angular/router';
import {ListProductComponent} from "./page/list-product/list-product.component";
import {HomeComponent} from "./page/home/home.component";
import {ProductDetailComponent} from "./page/product-detail/product-detail.component";
import {CartComponent} from "./page/cart/cart.component";

export const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];
