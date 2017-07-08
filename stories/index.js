import React from 'react';

import { storiesOf } from '@storybook/react';
import BlockTypeEditor from './BlockTypeEditor';
import DemoEditor from './DemoEditor';
import I18nEditor from './I18nEditor';

import './styles.css';

storiesOf('Basic Editor', module).add('to Storybook', () => <DemoEditor />);
storiesOf('Editor with i18n', module).add('to Storybook', () => <I18nEditor />);
storiesOf('Editor with blockType option', module).add('to Storybook', () => <BlockTypeEditor />);
