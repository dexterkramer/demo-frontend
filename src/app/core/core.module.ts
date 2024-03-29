import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'app/app.component';
import { HolyGrailLayoutComponent } from './layout/holy-grail';
import { Error403PageComponent, Error404PageComponent } from './pages';
import { DefaultLayoutComponent } from './layout/default/default.component';
import { DefaultHeaderComponent } from './layout/default/header/default-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
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
    ],
    exports: [
        RouterModule,
        AppComponent,
        HolyGrailLayoutComponent,
        Error403PageComponent,
        Error404PageComponent
    ],
})
export class CoreModule {}
