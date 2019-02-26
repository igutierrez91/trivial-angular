import { ConfigurationUser } from 'src/app/shared/models/Options';
import { actions as configurationActions } from '../actions/configuration.actions';

export const configurationInitialState: ConfigurationUser = {} as ConfigurationUser;

export function configurationUserReducer(
    state: ConfigurationUser = configurationInitialState,
    action): ConfigurationUser {
  const payload = action.payload;
  switch (action.type) {
    case configurationActions.SET_USER_CONFIGURATION:
      return {
        ...state,
        category:payload.category,
        difficulty:payload.difficulty,
        numberQuestions:payload.numberQuestions,
        time: payload.time,
        type: payload.type,
      };
  }
}
