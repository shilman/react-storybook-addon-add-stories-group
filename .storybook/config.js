import React from 'react';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import addStoriesGroup from '../src/';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

setAddon(addStoriesGroup);

configure(function () {
  require('../example/story');
}, module);
