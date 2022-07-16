import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { ProfileFeatureModule } from '../feature/profile.feature';
import { profileDefaultStates } from './profile-default.states';

@NgModule({
    imports: [
        ProfileFeatureModule,
        UIRouterModule.forChild({
            states: profileDefaultStates,
        }),
    ],
    providers: [

    ],
    declarations: [
        
    ],
    exports : [
        
    ]
})
export class ProfileDefaultRoutingModule {}
