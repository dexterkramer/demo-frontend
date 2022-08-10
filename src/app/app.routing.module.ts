import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@app-core/layout/default/default.component';
import { Error404PageComponent } from '@app-core/pages';
import { LoginPageComponent } from '@app-module/auth/feature/component/login';



export const routes: Routes = [
    /*** non-connecté ***/
    {
    //   canActivate: [LoginGuard],
      path: 'login',
      children: [
        { path: '', component: LoginPageComponent},
        { path: '**', component: LoginPageComponent},
      ]
    },
    /*** connecté ***/
    {
      path: '',
      component: DefaultLayoutComponent,
    //   canActivate: [ AuthGuard ],
      children: [
        {
            path : 'profile',
            loadChildren: () => import('./modules/profile/routing/profile-default.routing').then(m => m.ProfileDefaultRoutingModule)
        },
        {
            path: '**',
            component: Error404PageComponent
        }

      ]
    }
];

export const AppRouting = RouterModule.forRoot(routes,  {preloadingStrategy: PreloadAllModules});

