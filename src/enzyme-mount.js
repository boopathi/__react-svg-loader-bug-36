import React from 'react';
import MyComponent from './MyComponent';
import {mount, shallow} from 'enzyme';
import {jsdom} from 'jsdom';
import assert from 'assert';
import Image from './image.svg';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

assert(mount(<MyComponent/>).find('.my-image').length === 1);

assert(shallow(<MyComponent/>).find(Image).length === 1);

console.log('All assertions complete');
