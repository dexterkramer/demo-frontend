import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from 'app/app.component';
import { INITIAL_STATES } from 'app/app.states';
import { configFactory, ConfigService } from './config/config.service';
import { HolyGrailLayoutComponent } from './layout/holy-grail';
import { Error403PageComponent, Error404PageComponent } from './pages';
import { uiRouterConfigFn } from './router';
import { DefaultLayoutComponent } from './layout/default/default.component';
import { DefaultHeaderComponent } from './layout/default/header/default-header.component';

@NgModule({
    imports: [
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            useHash: false,
            config: uiRouterConfigFn,
            otherwise: '/',
        }),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        HolyGrailLayoutComponent,
        Error403PageComponent,
        Error404PageComponent,
        DefaultLayoutComponent,
        DefaultHeaderComponent,
    ],
    providers: [
        ConfigService,
        {   
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [ConfigService],
            multi: true
        }
    ],
    exports: [
        UIRouterModule,
        AppComponent,
        HolyGrailLayoutComponent,
        Error403PageComponent,
        Error404PageComponent
    ],
})
export class CoreModule {}
