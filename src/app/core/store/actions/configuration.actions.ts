import { Injectable } from '@angular/core';
import { ConfigurationUser } from 'src/app/shared/models/Options';

export const actions = {
  SET_USER_CONFIGURATION: 'SET_USER_CONFIGURATION',
};

@Injectable()
export class ConfigurationActions {
  setUserConfiguration(config: ConfigurationUser) {
    return {
      type: actions.SET_USER_CONFIGURATION,
      payload: config,
    };
  }
}
