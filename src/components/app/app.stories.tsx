import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import App, { AppProps } from './app';
import { FullStateType } from '../../types/general-types';

const store: any = {
  getState: (): FullStateType => ({
    data: {
      title: 'Hello World!!!',
    },
  }),
  subscribe: () => () => null,
  dispatch: action('dispatch'),
};

export default {
  components: App,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: 'App',
} as Meta;

const Template: Story<AppProps> = args => <App {...args} />;

export const Default = Template.bind({});
