import React from 'react';
import jsdom from 'jsdom';
import { mount } from 'enzyme';
import MyComponent from '../src/MyComponent';


const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.defaultView;
global.navigator = doc.defaultView.navigator;

describe('test MyComponent', () => {
    it('should pass', () => {
        const wrapper = mount(
            <MyComponent />
        );
    });
});
