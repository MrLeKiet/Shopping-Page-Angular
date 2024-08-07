import {Injectable} from '@angular/core';
import {Auth} from "@angular/fire/auth";
import {GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storeService: StoreService, private auth: Auth) {
  }

  currentUser!: any;

  async login() {
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    new GoogleAuthProvider();
    // console.log(credential.user);
    this.currentUser = credential.user;
    this.storeService.setLoggedIn(true);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
