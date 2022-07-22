import { DefaultLayoutComponent } from '@app-core/layout/default/default.component';
import { HolyGrailLayoutComponent } from '@app-core/layout/holy-grail';
import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import { ProfileComponent } from '../feature/components/profile.component';

export const profileDefaultStates: Ng2StateDeclaration[] = [
    {
        name: 'profile-base',
        parent: 'app',
        views: {
            "!layout": { component: DefaultLayoutComponent }
        },
        data: {
            requiresAuth: true,
        },
    },
    {
        name: 'profile',
        parent: 'profile-base',
        url: 'profile',
        views: {
            '!layout.content': { component: ProfileComponent },
        },
        data: {
            requiresAuth: true,
        },
    },
];
