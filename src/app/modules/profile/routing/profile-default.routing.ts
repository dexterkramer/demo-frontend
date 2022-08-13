import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { ProfileComponent } from '../feature/components/profile.component';
import { ProfileFeatureModule } from '../feature/profile.feature';

export const routes: Routes = [{
  path: '',
  canActivate: [ KeycloakAuthGuard  ],
  children : [
    {
        path: '**',
        component: ProfileComponent,
    },
  ],
}];

@NgModule({
    imports: [
        ProfileFeatureModule,
        RouterModule.forChild(routes)
    ],
    providers: [
    ],
    declarations: [
    ],
    exports : [
    ]
})
export class ProfileDefaultRoutingModule {}
