import { NgModule, ErrorHandler } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

/*Services*/
import { AuthService } from '@services/auth.service';
import { CallService } from '@services/call.service';
import { DataProvider } from '@services/data/base.data-provider';
import { LocalDataProvider } from '@services/data/local.data-provider';
import { FirebaseDataProvider } from '@services/data/firebase.data-provider';
import { RemoteDataProvider } from '@services/data/remote.data-provider';
//import { BackendlessDataProvider } from '@services/data/backendless.data-provider';
import { EmailService } from '@services/email.service';
//import { FacebookApiService } from '@services/facebook-api.service';
import { InAppBrowserService } from '@services/in-app-browser.service';
import { MapsService } from '@services/maps.service';
import { OpenHoursService } from '@services/open-hours.service';
import { FavoritesService } from '@services/favorites.service';

import { Calendar } from '@ionic-native/calendar/ngx';
import localeDe from '@angular/common/locales/de';
import { Config } from '../config';
import { NgxWebstorageModule } from 'ngx-webstorage';
registerLocaleData(localeDe, 'de');
import { ComponentsModule } from './pages/components/components.module';
//import { OneSignalModule } from './pages/push/one-signal.module';
import { AgmCoreModule } from '@agm/core';
import { AuthGuard } from './services/auth-guard.service';
import { CartServiceModule } from './pages/cart/cart-service.module';
import { AuthResolver } from './services/auth.resover';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(),
    CartServiceModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: Config.mapsApiKey
    }),
    NgxWebstorageModule.forRoot(),
    AngularFireModule.initializeApp(Config.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Config,
    AuthGuard,

    // { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
     { provide: DataProvider, useClass: LocalDataProvider },
    //{ provide: DataProvider, useClass: FirebaseDataProvider },
    // { provide: DataProvider, useClass: BackendlessDataProvider },
    // { provide: DataProvider, useClass: RemoteDataProvider },
    EmailService,
    CallService,
    InAppBrowserService,
    MapsService,
    OpenHoursService,
    FavoritesService,
    AuthService,
    Calendar,
   
    StatusBar,
    //OneSignalModule,
    SplashScreen,
    AuthResolver,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
