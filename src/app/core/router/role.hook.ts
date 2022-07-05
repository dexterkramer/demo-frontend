import { TransitionService } from '@uirouter/core';
// import { AuthService } from '../auth/auth.service';
// import { Transition } from '@uirouter/angular';
// import { Apollo } from 'apollo-angular';
// import { meQuery, MeQueryResponse } from '../../modules/account/gql/account.gql';

/**
 * This file contains a Transition Hook which prevents
 * specific types of user to access the application
 *
 *
 */
export function roleHook(transitionService: TransitionService) {
    // const redirectIfNotCandidate = (transition: Transition) => {
    //     const apollo: Apollo = transition.injector().get(Apollo);
    //     const $state = transition.router.stateService;
    //     const localMe: MeQueryResponse = apollo.client.readQuery({
    //         query: meQuery,
    //     });

    //     const toState = transition.to();
    //     if (
    //         localMe &&
    //         localMe.me &&
    //         (localMe.me.profile.name !== 'candidate' || localMe.me.oldcandidateshipAccess) &&
    //         toState.name != 'redirect'
    //     ) {
    //         // Reset store to avoid perpetual screen
    //         // due to cache of Me object.
    //         // This shouldn't happen much unless multiple
    //         // users uses the same device.
    //         apollo.client.resetStore();
    //         return $state.target('redirect', undefined, { location: true });
    //     }
    // };

    // transitionService.onFinish(null, redirectIfNotCandidate, { priority: 10 });
    // // Register the "requires auth" hook with the TransitionsService
}
