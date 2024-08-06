import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"login-page-6d5d3","appId":"1:994908491726:web:cc51041cf7d6a306bea59f","storageBucket":"login-page-6d5d3.appspot.com","apiKey":"AIzaSyDBc1voZRGyo1s2XHO39BBINv1HU8657VI","authDomain":"login-page-6d5d3.firebaseapp.com","messagingSenderId":"994908491726"})), provideAuth(() => getAuth())]
};
