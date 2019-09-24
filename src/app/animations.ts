import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


/**
 * Implement slide in animation for changes in route
 * between NewsComponent => NewsDetailComponent
 * and NewsDetailComponent => NewsComponent
 * as per the provided video
 */
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('NewsComponent => NewsDetailComponent', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
      ])
    ]),
    transition('NewsDetailComponent => NewsComponent', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
        ]),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
        ])
      ])
    ]),
  ]);