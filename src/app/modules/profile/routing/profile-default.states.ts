import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import { ProfileComponent } from '../feature/components/profile.component';

export const profileDefaultStates: Ng2StateDeclaration[] = [
    {
        name: 'profile',
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
