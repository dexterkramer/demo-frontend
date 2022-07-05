import { NgModule } from "@angular/core";
import { DashboardServiceModule } from "./dashboard.services.module";

@NgModule( {
    imports: [
        DashboardServiceModule.forRoot()
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: []
} )
export class DashboardSharedModule { }