import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule } from '@uirouter/angular';
import { SharedModule } from '@app-shared';
import { INITIAL_STATES } from './app.states';
import { uiRouterConfigFn } from './core/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: false,
      config: uiRouterConfigFn,
      otherwise: '/',
    }),
    GraphQLModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
