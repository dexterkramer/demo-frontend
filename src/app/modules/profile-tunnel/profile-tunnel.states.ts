import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import { ProfileComponent } from './components/profile.component';

export const profileTunnelStates: Ng2StateDeclaration[] = [
    {
        name: 'tunnels',
        parent: 'app',
        url: 'profile',
        views: {
            '^.^.$default': { component: ProfileComponent },
        },
        data: {
            requiresAuth: true,
        },
    }
];
