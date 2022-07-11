import { Ng2StateDeclaration } from '@uirouter/angular';
import { DashboardComponent } from './components/dashboard.component';

export const dashboardStates: Ng2StateDeclaration[] = [
    {
        parent: 'app',
        name: 'dashboard',
        url: 'dashboard',
        // redirectTo: 'home',
        views: {
            '^.^.$default': { component: DashboardComponent },
        },
        data: {
            // requiresAuth: true,
        },
        resolve: [],
    }
];
