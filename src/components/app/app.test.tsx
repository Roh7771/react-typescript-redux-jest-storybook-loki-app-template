import React from 'react';
import renderer from 'react-test-renderer';
import { App, AppProps } from './app';

const mockProps: AppProps = {
  title: 'Some Title',
  onTitleChange: jest.fn(),
  onTitleReset: jest.fn(),
};

test('App should render correct', () => {
  const tree = renderer.create(<App {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
