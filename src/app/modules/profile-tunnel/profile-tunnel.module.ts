import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { ProfileComponent } from './components/profile.component';
import { profileTunnelStates } from './profile-tunnel.states';

@NgModule({
    imports: [
        UIRouterModule.forChild({
            states: profileTunnelStates,
        }),
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
export class ProfileTunnelModule {}
