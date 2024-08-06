import {Component} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {TopBannerComponent} from "../../components/top-banner/top-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ProductCardComponent,
    TopBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
