import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../feature/components/profile.component';
import { ProfileFeatureModule } from '../feature/profile.feature';

export const routes: Routes = [{
    path: '',
    // canActivate: [ AuthGuard, RoleGuard ],
    // data: {
    //   allowdRoles: ['talent_manager']
    // },
    children : [
      {
          path: '**',
          component: ProfileComponent,
        //   resolve: {
        //       structureAccounts: StructureAccountsResolver
        //   },
        //   data: {
        //       structureSearchQueryFilters: {
        //           roles: ['talent_manager', 'sales']
        //       }
        //   }
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
        RouterModule
    ]
})
export class ProfileDefaultRoutingModule {}
