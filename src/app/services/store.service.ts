import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  products: ProductModel[] = [
    {
      id: 1,
      name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Trinity OC Black Edition 12GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820q-10p-image01_0.jpg?itok=qX2eHrls',
      inStock: 10,
      quantity: 10
    },
    {
      id: 2,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/download/files/styles/w787/public/product_main_image/graphics_cards/zt-d40820f-10p-image01_0.jpg?itok=djXmlcmO',
      inStock: 10,
      quantity: 10
    },
    {
      id: 3,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER Trinity Black Edition 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820d-10p-image01.jpg?itok=MZddVncL',
      inStock: 10,
      quantity: 10
    },
    {
      id: 4,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10,
      quantity: 10
    },
    {
      id: 5,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10,
      quantity: 10
    },
    {
      id: 6,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10,
      quantity: 10
    },
    {
      id: 7,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10,
      quantity: 10
    },
    {
      id: 8,
      name: 'ZOTAC GAMING GeForce RTX 4080 SUPER AMP Extreme AIRO 16GB GDDR6X',
      price: 100,
      description: '16GB GDDR6X / 23 Gbps / 256-bit',
      imageUrl: 'https://www.zotac.com/system/files/styles/w787/private/product_main_image/graphics_cards/zt-d40820b-10p-image01.jpg?itok=x7duRN4r',
      inStock: 10,
      quantity: 10
    },
  ];

  private cart: ProductModel[] = [];
  private cartSubject = new BehaviorSubject<ProductModel[]>([]);
  cart$ = this.cartSubject.asObservable();
  loggedIn = false;


  addToCart(product: ProductModel) {
    if (!this.loggedIn) {
      alert('You must be logged in to add items to the cart.');
      return;
    }

    const index = this.cart.findIndex(item => item.id === product.id);
    const indexProduct = this.products.findIndex(item => item.id === product.id);

    if (this.products[indexProduct].inStock === 0) {
      return;
    }

    if (index !== -1) {
      this.cart[index].quantity++;
    } else {
      this.cart.push({...product, quantity: 1});
    }

    this.products[indexProduct].inStock--;
    this.cartSubject.next(this.cart);
  }

  setLoggedIn(b: boolean) {
    this.loggedIn = b;
  }
}
