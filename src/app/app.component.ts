import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {StoreService} from "./services/store.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {TopBannerComponent} from "./components/top-banner/top-banner.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ListProductComponent} from "./page/list-product/list-product.component";
import {HomeComponent} from "./page/home/home.component";
import {set} from "@angular/fire/database";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, ListProductComponent, TopBannerComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public storeService: StoreService,
              public authService: AuthService) {

    const delay = (ms: number | undefined) => new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });

    async function diCho() {
      console.log("Đang đi chợ...");
      await delay(2000)
    }

    async function botMi() {
      console.log("Đang đi tìm bột mì...");
      await delay(2000);
      console.log("Đã mua xong bột mì.");
      await delay(2000)
    }

    async function menNo() {
      console.log("Đang đi men nở...");
      await delay(2000);
      console.log("Đã mua xong men nở.");
      await delay(2000)
    }

    async function muoi() {
      console.log("Đang đi tìm muối...");
      await delay(2000);
      console.log("Đã mua xong muối.");
      await delay(2000)
    }

    async function giam() {
      console.log("Đang đi tìm giấm...");
      await delay(2000);
      console.log("Đã mua xong giấm.");
      await delay(2000)
    }

    async function duong() {
      console.log("Đang đi tìm đường...");
      await delay(2000);
      console.log("Đã mua xong đường.");
      await delay(2000)
    }

    async function suaTuoi() {
      console.log("Đang đi tìm sữa tươi...");
      await delay(2000);
      console.log("Đã mua xong sữa tươi.");
      await delay(2000)
    }

    async function dauAn() {
      console.log("Đang đi tìm dầu ăn...");
      await delay(2000);
      console.log("Đã mua xong dầu ăn.");
      await delay(2000)
    }

    async function kiemTraNguyenLieu() {
      console.log("Đang kiểm tra nguyên liệu...");
      await delay(2000);
      console.log("Đã mua đủ nguyên liệu.");
    }

    async function diVeNha() {
      console.log("Đang về nhà...");
      await delay(2000)
      console.log("Đã về nhà.");
    }

    async function chuanBiBot() {
      console.log("Chuẩn bị bột...");
      await delay(2000);
      console.log("Đã chuẩn bị xong bột.");
    }


    async function nauAn() {
      await diCho();
      await botMi();
      await menNo();
      await muoi();
      await giam();
      await duong();
      await suaTuoi();
      await dauAn();
      await kiemTraNguyenLieu();

      await diVeNha();

      await Promise.all([chuanBiBot(), chuanBiBot()]);

      console.log("Bánh mì đã nướng xong.");
      console.log("Quá trình nấu ăn đã hoàn tất. Quất thôi!!!!");
    }

    nauAn();
  }
}
