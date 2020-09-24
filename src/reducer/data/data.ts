import {
  DataActionConstType,
  DataInitialStateType,
  ResetTitleActionType,
  SetTitleActionType,
  DataActionTypes,
} from '../../types/redux/data/types';

const initialState: DataInitialStateType = {
  title: 'Hello World!',
};

const ActionTypes: DataActionConstType = {
  SET_TITLE: 'SET_TITLE',
  RESET_TITLE: 'RESET_TITLE',
};

const ActionCreators = {
  setTitle: (title: string): SetTitleActionType => ({
    type: ActionTypes.SET_TITLE,
    payload: title,
  }),

  resetTitle: (): ResetTitleActionType => ({
    type: ActionTypes.RESET_TITLE,
  }),
};

const reducer = (
  state = initialState,
  action: DataActionTypes,
): DataInitialStateType => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {
        title: action.payload,
      };

    case ActionTypes.RESET_TITLE:
      return {
        title: 'Hello World!',
      };

    default:
      return state;
  }
};

// Пример реализации ассинхронных экшенов
// type ThunkType = ThunkAction<void, GeneralStateType, AxiosInstance, DataActionsTypes | AnotherActionsTypes>;
// const Operation = {
//   loadTitle: (): ThunkType => (dispatch, getState, api) => {
//     api.get(`some-root`).then(response => {
//       const { data } = response.data;
//       dispatch(ActionCreators.setTitle(data));
//     });
//   },
// };

export {
  reducer as dataReducer,
  ActionCreators as DataActionCreators,
  ActionTypes as DataActionTypes,
  // Operation as DataOperation,
};
