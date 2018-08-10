import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Forum from './ForumPage';

function setup(saving) {
    const props = {
      onPost: () => {}
    };
  
    return shallow(<Forum {...props} />);
}

describe('Forum via Enzyme...', () => {
    it('Renders div...', () => {
      /*
      const wrapper = setup(false);
      expect(wrapper.find('div').length).toBe(2);
      expect(wrapper.find('form').length).toBe(1);
      expect(wrapper.find('input').length).toBe(2);
      expect(wrapper.find('button').length).toBe(1);
      expect(wrapper.find('ol').length).toBe(1);
      expect(wrapper.find('ul').length).toBe(1);
      
      expect(wrapper.find('div').last().text()).toBe('Bob Ross, welcome to Home Forum');
      expect(wrapper.find('button').text()).toBe('Post');
      expect(wrapper.find('form').text()).toBe('Title:Details:');

      expect(wrapper.find('ol').html()).toEqual('<ol style="font-style:italic;font-family:Georgia, Times, serif;font-size:22px;color:#000;" class="forum"><li style="box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);border-radius:10px;background:#67C8FF;"><p style="padding:8px;font-style:normal;font-family:Arial;font-size:15px;color:#FFF;"><em style="display:block;">Maya T., <br/>Graphics:<br/><br/>Design and style is what makes a client fall initially in love with a product. <br/>I&#x27;m here to help you find the design that feels good to you and reflects a message you want.<br/><br/>Date Posted: 03/02/18 </em></p></li><li style="box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);border-radius:10px;background:#67C8FF;"><p style="padding:8px;font-style:normal;font-family:Arial;font-size:15px;color:#FFF;"><em style="display:block;">Chris D.,<br/>3D Architectural Rendering Designer:<br/><br/>I am a modernistic 3D Architectural Rendering Designer who has both a Interior Design Technology A.S. degree and a Technical Certificate in Kitchen and Bath Design. I mainly work with SketchUp and SU Podium but have advanced knowledge in AutoCAD, Adobe Photoshop, Adobe Lightroom.<br/><br/>Date Posted: 02/14/18 </em></p></li><li style="box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);border-radius:10px;background:#67C8FF;"><p style="padding:8px;font-style:normal;font-family:Arial;font-size:15px;color:#FFF;"><em style="display:block;">Emily P., <br/> E-Commerce UI/UX:<br/><br/>My aim is to create long-lasting professional relationships with my clients where I can help them see their success through. I love getting on routine calls and discussing client goals and throwing out ideas. I have never failed to over-deliver on a project and I have always helped my clients achieve successes.<br/><br/>Date Posted: 02/13/18 </em></p></li></ol>');
      expect(wrapper.find('ul').html()).toEqual('<ul style="list-style-type:none;text-align:center;border-top:3px solid #EEE;border-bottom:3px solid #EEE;padding:20px 0;background-color:#4572AE;" class="navbar"><li style="display:inline;text-transform:uppercase;padding:0 20px;color:#FFF;letter-spacing:9px;"><a style="text-decoration:none;color:#EEE;">Discover</a></li><li style="display:inline;text-transform:uppercase;padding:0 20px;color:#FFF;letter-spacing:9px;"><a style="text-decoration:none;color:#EEE;">Account</a></li><li style="display:inline;text-transform:uppercase;padding:0 20px;color:#FFF;letter-spacing:9px;"><a style="text-decoration:none;color:#EEE;">Messages</a></li><li style="display:inline;text-transform:uppercase;padding:0 20px;color:#FFF;letter-spacing:9px;"><a style="text-decoration:none;color:#EEE;">Logout</a></li></ul>');
      */
    });
});