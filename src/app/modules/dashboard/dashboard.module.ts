import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardSharedModule } from './dashboard.shared.module';
import { dashboardStates } from './dashboard.states';

@NgModule({
    imports: [
        DashboardSharedModule,
        UIRouterModule.forChild({
            states: dashboardStates,
        }),
    ],
    declarations: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule{}
