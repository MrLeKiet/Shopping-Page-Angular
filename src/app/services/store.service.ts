import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  cart: any = [];
  products: ProductModel[] = [
    {
      id: 1,
      name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Trinity OC Black Edition 12GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820q-10p-image01_0.jpg?itok=qX2eHrls',
      inStock: 10
    },
    {
      id: 2,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/download/files/styles/w787/public/product_main_image/graphics_cards/zt-d40820f-10p-image01_0.jpg?itok=djXmlcmO',
      inStock: 10
    },
    {
      id: 3,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER Trinity Black Edition 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820d-10p-image01.jpg?itok=MZddVncL',
      inStock: 10
    },
    {
      id: 4,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10
    },
    {
      id: 5,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10
    },
    {
      id: 6,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10
    },
    {
      id: 7,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10
    },
    {
      id: 8,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10
    },
  ];

  private cartSubject = new BehaviorSubject<ProductModel[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: any) {
    let index = this.cart.findIndex(
      (product: ProductModel) => product.id == item.id);
    let indexProduct = this.products.findIndex(
      (product: ProductModel) => product.id == item.id);
    if (this.products[indexProduct].inStock == 0) {
      return;
    }
    if (index != -1) {
      this.cart[index].quantity++;
      this.products[indexProduct].inStock--;
    } else {
      this.cart.push(item);
      this.products[indexProduct].inStock--;
    }
    this.cartSubject.next(this.cart);
  }

}
