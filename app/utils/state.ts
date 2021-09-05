import { FC } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction, bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import { Msg } from "../common/constants";
import { ReducerActionInterface as RI } from "../common/interface";

export const dispatch = (type: Msg, data?: any): RI => ({ type, data });
const Actions = (dispatch: Dispatch<AnyAction>) => ({
  ...bindActionCreators(UserActions, dispatch),
});
export const Connect = (component: FC<any>) =>
  connect(null, Actions)(component);
