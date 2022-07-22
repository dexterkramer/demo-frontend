import { Error403PageComponent, Error404PageComponent } from '@app-core/pages';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { NetworkLoaderComponent } from './core/network-loader/network-loader.component';

export const INITIAL_STATES: Ng2StateDeclaration[] = [
    {
        name: 'app',
        url: '/',
        component: AppComponent,
        views: {
            loader: { component: NetworkLoaderComponent },
        },
        // redirectTo: 'dashboard',
    },
    {
        name: 'dashboard.**',
        parent: 'app',
        data: {
            // requiresAutth: true,
        },
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        parent: 'app',
        name: 'errors',
        abstract: true,
        redirectTo: 'app',
    },
    {
        parent: 'errors',
        name: '403',
        views: {
            '^.^.$default': {
                component: Error403PageComponent,
            },
        },
    },
    {
        parent: 'errors',
        name: '404',
        views: {
            '^.^.^.$default': {
                component: Error404PageComponent,
            },
        },
    },
    {
        name: 'profile.**',
        parent: 'app',
        url: 'profile',
        data: {
            requiresAuth: true,
        },
        loadChildren: () => import('./modules/profile/routing/profile-default.routing').then((m) => m.ProfileDefaultRoutingModule),
    }
];
