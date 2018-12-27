import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import ReviewBox from '../client/src/components/ReviewBox.jsx';


describe('App', () => {
  it("should render the initial components", () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find(ReviewBox)).toHaveLength(4);
  })
});