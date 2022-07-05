import { ModuleWithProviders, NgModule } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: []
})
export class DashboardServiceModule{
    static forRoot(): ModuleWithProviders<DashboardServiceModule> {
        return {
          ngModule: DashboardServiceModule,
          providers: [ 
            DashboardService
          ]
        };
    }
}