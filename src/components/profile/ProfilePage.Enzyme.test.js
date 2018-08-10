import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ProfilePage from './ProfilePage';

function setup(saving) {
    const props = {
      onSubmit: () => {}
    };
  
    return shallow(<ProfilePage {...props} />);
}

describe('ProfilePage via Enzyme...', () => {
    it('Renders div...', () => {
      // const wrapper = setup(false);
      // expect(wrapper.find('button').length).toBe(1);
      // expect(wrapper.find('div').length).toBe(4);
      // expect(wrapper.find('form').length).toBe(1);
      // expect(wrapper.find('input').length).toBe(2);
      // expect(wrapper.find('p').length).toBe(1);
      // expect(wrapper.find('ul').length).toBe(1);

      // expect(wrapper.find('button').text()).toBe('Submit');
      // expect(wrapper.find('div').last().text()).toBe("Bob RossDaytona Beach, FLYou have unlimited power. You have the ability to move mountains. You can bend rivers. Look around. Look at what we have. Beauty is everywhere—you only have to look to see it. We don't make mistakes, only happy accidents.");
      // expect(wrapper.find('form').first().text()).toBe('Old Password:New Password:Re-enter New Password:Submit');
    });
});