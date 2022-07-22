import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from '@app-core/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@app-core/core.module';
import { NetworkLoaderModule } from '@app-core/network-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultHeaderComponent } from './src/app/core/layout/default/header/default-header.component';

@NgModule({
  declarations: [
  
    DefaultHeaderComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    CoreModule,
    NetworkLoaderModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
