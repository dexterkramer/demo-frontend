import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from '@app-core/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@app-core/core.module';
import { NetworkLoaderModule } from '@app-core/network-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFeatureModule } from '@app-module/auth/feature/auth.module';
import { AppRouting } from './app.routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from '@app-module/auth/utils/keycloak-init';
import { configFactory, ConfigService } from '@app-core/config/config.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    CoreModule,
    AppRouting,
    NetworkLoaderModule.forRoot(),
    BrowserAnimationsModule,
    AuthFeatureModule,
    KeycloakAngularModule
  ],
  providers: [
    ConfigService,
    {   
        provide: APP_INITIALIZER,
        useFactory: configFactory,
        deps: [ConfigService],
        multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, ConfigService]
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
