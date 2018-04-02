import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import * as Button from '../src/components/Button';
var Button = require('../src/components/Button');

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Click me!</Button>
    ));