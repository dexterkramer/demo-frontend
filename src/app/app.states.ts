import { Error403PageComponent, Error404PageComponent } from '@app-core/pages';
import { LoginComponent } from '@app-module/auth/feature/component/login';
import { RegistrationComponent } from '@app-module/auth/feature/component/register/registration.component';
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
        parent: 'app',
        url: 'login',
        name: 'login',
        data: {
            // title: I18nPageTitles.login,
        },
        views: {
            '!layout': { component: LoginComponent },
        },
        resolve: [
            // {
            //     token: 'linkedinUrl',
            //     deps: [LinkedInService],
            //     resolveFn: (linkedinService: LinkedInService): Promise<string> => {
            //         return linkedinService
            //             .getLinkedinUrlToken(null)
            //             .then((result: ApolloQueryResult<LinkedInURLQueryResponse>): string => {
            //                 return result.data.getLinkedinUrl;
            //             });
            //     },
            // },
        ],
    },
    {
        parent: 'app',
        url: 'register',
        name: 'register',
        data: {
        },
        views: {
            '!layout': { component: RegistrationComponent },
        },
        resolve: [
            // {
            //     token: 'linkedinUrl',
            //     deps: [LinkedInService],
            //     resolveFn: (linkedinService: LinkedInService): Promise<string> => {
            //         return linkedinService
            //             .getLinkedinUrlToken(null)
            //             .then((result: ApolloQueryResult<LinkedInURLQueryResponse>): string => {
            //                 return result.data.getLinkedinUrl;
            //             });
            //     },
            // },
        ],
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
