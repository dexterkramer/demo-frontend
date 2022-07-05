import { Ng2StateDeclaration } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { NetworkLoaderComponent } from './core/network-loader/network-loader.component';
import { Error403PageComponent, Error404PageComponent } from '@app-shared';

export const INITIAL_STATES: Ng2StateDeclaration[] = [
    {
        name: 'app',
        url: '/',
        component: AppComponent,
        views: {
            loader: { component: NetworkLoaderComponent },
        },
        redirectTo: 'dashboard',
    },
    // {
    //     parent: 'app',
    //     url: 'login',
    //     name: 'login',
    //     data: {
    //         title: I18nPageTitles.login,
    //     },
    //     views: {
    //         '^.^.$default': { component: LoginPageComponent },
    //     },
    //     resolve: [
    //         {
    //             token: 'linkedinUrl',
    //             deps: [LinkedInService],
    //             resolveFn: (linkedinService: LinkedInService): Promise<string> => {
    //                 return linkedinService
    //                     .getLinkedinUrlToken(null)
    //                     .then((result: ApolloQueryResult<LinkedInURLQueryResponse>): string => {
    //                         return result.data.getLinkedinUrl;
    //                     });
    //             },
    //         },
    //     ],
    // },
    {
        name: 'dashboard.**',
        parent: 'app',
        data: {
            requiresAutth: true,
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
    // {
    //     name: 'tunnels',
    //     parent: 'app',
    //     views: {
    //         '^.^.$default': { component: SidePanelLayoutComponent },
    //     },
    //     data: {
    //         requiresAuth: true,
    //     },
    // },
    // {
    //     name: 'profile-tunnel.**',
    //     parent: 'tunnels',
    //     url: 'profile',
    //     data: {
    //         requiresAuth: true,
    //     },
    //     loadChildren: () => import('./modules/profile-tunnel/profile-tunnel.module').then((m) => m.ProfileTunnelModule),
    // },
    // {
    //     name: 'company-tunnel.**',
    //     url: 'company',
    //     parent: 'tunnels',
    //     params: {
    //         requiresAuth: true,
    //     },
    //     loadChildren: () => import('./modules/company-tunnel/company-tunnel.module').then((m) => m.CompanyTunnelModule),
    // },
    // {
    //     name: 'whats-next.**',
    //     url: 'profile',
    //     parent: 'tunnels',
    //     loadChildren: () => import('./modules/whats-next/whats-next.module').then((m) => m.WhatsNextModule),
    // },
];
