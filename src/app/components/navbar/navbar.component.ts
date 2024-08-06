import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RouterLink} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public authService: AuthService) {
  }

  protected readonly AuthService = AuthService;
}
