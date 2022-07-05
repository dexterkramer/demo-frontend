import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/app.dashboard';
import { DashboardSharedModule } from './dashboard.shared.module';

@NgModule({
    imports: [
        DashboardSharedModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule{}
