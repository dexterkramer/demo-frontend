import { NgModule } from '@angular/core';
import { AccountProviderModule } from '@app-module/account/provider/account.provider';
import { ProfileComponent } from './components/profile.component';

@NgModule({
    imports: [
        AccountProviderModule.forRoot()
    ],
    providers: [

    ],
    declarations: [
        ProfileComponent
    ],
    exports : [
        ProfileComponent
    ]
})
export class ProfileFeatureModule {}
