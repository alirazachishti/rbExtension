import {
  ReducerActionInterface as RI,
  UserStateInterface as UI,
} from "../common/interface";
import { initialUserState, Msg } from "../common/constants";

const actionsMap = {
  [Msg.LOGIN_USER]: (state: UI, { data}: RI) => ({
    ...state,
    ...data
  })
};

export default function user(state = initialUserState, action: RI) {
  // @ts-ignore
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
