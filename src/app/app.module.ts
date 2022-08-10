import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from '@app-core/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@app-core/core.module';
import { NetworkLoaderModule } from '@app-core/network-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFeatureModule } from '@app-module/auth/feature/auth.module';
import { AppRouting } from './app.routing.module';

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
    AuthFeatureModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
