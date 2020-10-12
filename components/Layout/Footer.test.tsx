import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

import Footer from './Footer';

expect.extend(enzymify());

describe('Footer', () => {
  it('renders the Footer without errors', () => {
    const wrapper = shallow(<Footer />);
  });

  it('renders the footer as expected', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
