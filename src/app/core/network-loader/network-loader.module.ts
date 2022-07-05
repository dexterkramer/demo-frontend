import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NetworkLoaderComponent } from './network-loader.component';
import { NetworkLoaderService } from './network-loader.service';

/**
 * Network loading management module.
 * Module should be loaded in core module.
 */
@NgModule({
    imports: [
        // MatProgressBarModule, 
        CommonModule
    ],
    declarations: [
        NetworkLoaderComponent
    ],
    exports: [
        NetworkLoaderComponent
    ],
})
export class NetworkLoaderModule {
    static forRoot(): ModuleWithProviders<NetworkLoaderModule> {
        return {
            ngModule: NetworkLoaderModule,
            providers: [NetworkLoaderService],
        };
    }
}
