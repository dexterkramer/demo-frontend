import { Ng2StateDeclaration } from '@uirouter/angular';
import { DashboardComponent } from './components/app.dashboard';

export const dashboardStates: Ng2StateDeclaration[] = [
    {
        parent: 'app',
        name: 'dashboard',
        redirectTo: 'home',
        views: {
            '^.^.$default': { component: DashboardComponent },
        },
        data: {
            requiresAuth: true,
        },
        resolve: [],
    }
];
