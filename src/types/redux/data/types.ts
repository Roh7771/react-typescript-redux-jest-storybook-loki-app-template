export type DataInitialStateType = {
  title: string;
};

export type DataActionConstType = {
  SET_TITLE: 'SET_TITLE';
  RESET_TITLE: 'RESET_TITLE';
};

export type SetTitleActionType = {
  type: DataActionConstType['SET_TITLE'];
  payload: string;
};

export type ResetTitleActionType = {
  type: DataActionConstType['RESET_TITLE'];
};

export type DataActionTypes = SetTitleActionType | ResetTitleActionType;
