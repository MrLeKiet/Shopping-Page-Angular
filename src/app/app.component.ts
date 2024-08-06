import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {StoreService} from "./services/store.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {TopBannerComponent} from "./components/top-banner/top-banner.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ListProductComponent} from "./page/list-product/list-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, ListProductComponent, TopBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public storeService: StoreService,
              public authService: AuthService) {
  }
}
