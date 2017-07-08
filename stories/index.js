import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import DemoEditor from './demoEditor';
import I18nEditor from './i18nEditor';

import './styles.css';

storiesOf('Basic Editor', module).add('to Storybook', () => <DemoEditor />);
storiesOf('Editor with i18n', module).add('to Storybook', () => <I18nEditor />);
