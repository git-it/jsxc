import {
  Action,
  ConnectAction,
  SetConnectionStatusAction,
  SetThreadsAction,
} from './actions';

export const isConnectAction = (action: Action): action is ConnectAction => {
  return action.type === 'CONNECT';
};

export const isSetConnectionStatusAction = (
  action: Action,
): action is SetConnectionStatusAction => {
  return action.type === 'SET_CONNECTION_STATUS';
};

export const isSetThreadsAction = (
  action: Action,
): action is SetThreadsAction => {
  return action.type === 'SET_THREADS';
};
