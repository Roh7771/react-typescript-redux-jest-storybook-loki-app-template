import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { DataActionCreators } from '../../reducer/data/data';
import getTitle from '../../reducer/data/selectors';
import { DataActionTypes } from '../../types/redux/data/types';
import { FullStateType, MockAxiosInstance } from '../../types/general-types';

export type AppProps = {
  title: string;

  onTitleChange: (title: string) => void;
  onTitleReset: () => void;
};

export const App: React.FunctionComponent<AppProps> = ({
  title,
  onTitleChange,
  onTitleReset,
}: AppProps) => (
  <div>
    <h1 className="title">{title}</h1>
    <button type="button" onClick={() => onTitleChange('Another Title')}>
      Change title text to Another Title
    </button>
    <button type="button" onClick={() => onTitleReset()}>
      Reset title
    </button>
  </div>
);

const mapStateToProps = (state: FullStateType) => ({
  title: getTitle(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<FullStateType, MockAxiosInstance, DataActionTypes>,
) => ({
  onTitleChange: (title: string) => {
    dispatch(DataActionCreators.setTitle(title));
  },
  onTitleReset: () => {
    dispatch(DataActionCreators.resetTitle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
