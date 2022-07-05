import { TransitionService } from '@uirouter/core';
// import { AuthService } from '../auth/auth.service';
// import { Transition } from '@uirouter/angular';
// import { Apollo } from 'apollo-angular';
// import { meQuery, MeQueryResponse } from '../../modules/account/gql/account.gql';

/**
 * This file contains a Transition Hook which protects a
 * route that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
export function requiresAuthHook(transitionService: TransitionService) {
    // Matches if the destination state's data property has a truthy 'requiresAuth' property
    // const requiresAuthCriteria = {
    //     to: (state) => state.data && state.data.requiresAuth,
    // };

    // const redirectToLogin = (transition: Transition) => {
    //     const authService: AuthService = transition.injector().get(AuthService);
    //     const $state = transition.router.stateService;
    //     if (!authService.isAuthenticated()) {
    //         return $state.target('login', undefined, { location: true });
    //     } else {
    //     }
    // };

    // // Registers a hook that scrolls user to the page top before each state transition
    // transitionService.onBefore(
    //     null,
    //     () => {
    //         window.scroll({ top: 0, behavior: 'smooth' });
    //     },
    //     { priority: 12 }
    // );

    // // Register the "requires auth" hook with the TransitionsService
    // transitionService.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
}
