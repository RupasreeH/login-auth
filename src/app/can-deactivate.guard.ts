import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './can-component-deactivate';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
