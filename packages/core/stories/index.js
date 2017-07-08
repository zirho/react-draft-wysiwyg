import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import DemoEditor from './demoEditor';

storiesOf('Welcome', module).add('to Storybook', () => <DemoEditor />);
