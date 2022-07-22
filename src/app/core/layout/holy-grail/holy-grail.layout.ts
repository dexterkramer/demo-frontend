import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('200ms ease-out', style({ left: '100%' }))], { optional: true }),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        ]),
        query(':enter', animateChild()),
    ]),
]);

/**
 * The default global layout for UI rendering
 */
@Component({
    templateUrl: './holy-grail.layout.html',
    styleUrls: ['./holy-grail.layout.scss'],
    animations: [slideInAnimation],
})
export class HolyGrailLayoutComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
