import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import PrivateDiscussion from './PrivateDiscussion';

function setup(saving) {
    const props = {
      onAdd: () => {},
      onSend: () => {}
    };
  
    return shallow(<PrivateDiscussion {...props} />);
}

describe('Forum via Enzyme...', () => {
    it('Renders div...', () => {
      /*
      const wrapper = setup(false);
      expect(wrapper.find('button').length).toBe(1);
      expect(wrapper.find('div').length).toBe(2);
      expect(wrapper.find('form').length).toBe(2);
      expect(wrapper.find('input').length).toBe(2);
      expect(wrapper.find('p').length).toBe(2);
      expect(wrapper.find('ul').length).toBe(3);

      expect(wrapper.find('button').text()).toBe('Send');
      expect(wrapper.find('div').last().text()).toBe('Private Discussion, with AbercrombieMan990');
      expect(wrapper.find('form').first().text()).toBe('Add Item Todo: ');
      expect(wrapper.find('p').first().text()).toBe('To Do    -     (click on entries to remove)');
      expect(wrapper.find('p').last().text()).toBe('Message');
      */
    });
});