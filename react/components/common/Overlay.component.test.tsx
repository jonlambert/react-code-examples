import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import { Overlay } from './Overlay.component';

describe('Overlay.component', () => {
  it('should render', () => {
    expect(shallow(<Overlay />)).toMatchSnapshot();
  });
  it('should register click', () => {
    const onClick = jest.fn();
    const component = shallow(<Overlay onClick={onClick} />);
    component.find('div').simulate('click');
    expect(onClick).toBeCalled();
  });
});
