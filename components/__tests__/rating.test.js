import React from 'react';
import Rating from '../Rating';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';

describe('Rating', () => {
    afterEach(cleanup);
  
    it('render correctly', () => {
      const component = renderer.create(<Rating />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});