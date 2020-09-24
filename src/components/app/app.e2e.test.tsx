import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App, AppProps } from './app';

configure({
  adapter: new Adapter(),
});

const mockProps: AppProps = {
  title: 'Some Title',
  onTitleChange: jest.fn(),
  onTitleReset: jest.fn(),
};

test('App should content the title', () => {
  const app = shallow(<App {...mockProps} />);

  const title = app.find('.title');

  expect(title.text()).toBe('Some Title');
});
