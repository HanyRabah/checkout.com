import React from 'react';
import Form from '../Form';
import renderer from 'react-test-renderer';
import { fireEvent, cleanup, render } from '@testing-library/react';


describe('Form', () => {
    afterEach(cleanup);
  
    it('render correctly', () => {
      const component = renderer.create(<Form />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    // test('Form Submit', () => {
    //     const onSubmit = jest.fn();
    //     const { getByTestId } = render(<Form onSubmit={onSubmit} />);
    //     fireEvent.click(getByTestId('form'));
    //     expect(onSubmit).toHaveBeenCalled();
    // })
  });

 
