import { Injector } from '@angular/core';
import { UIRouter } from '@uirouter/core';
// import { visualizer } from '@uirouter/visualizer';
// import { environment } from '@connect-environments/environment';
// import { requiresAuthHook } from './auth.hook';
// import { roleHook } from './role.hook';

/** UIRouter Config Function  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
    // Configure the initial state
    // If the browser URL doesn't matches any state when the router starts,
    // go to the `hello` state by default
    router.urlService.rules.initial({ state: 'app' });

    // Use @uirouter/visualizer to show the states and transitions
    // if (!environment.production) {
    //     visualizer(router);
    // }
    // const transitionService = router.transitionService;
    // // Calls the function that handles state & view guard access
    // requiresAuthHook(transitionService);
    // roleHook(transitionService);
}
