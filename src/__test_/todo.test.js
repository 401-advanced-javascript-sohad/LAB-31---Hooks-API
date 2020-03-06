/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import ToDo from '../modules/todo.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ToDo />', ()=>{
  it('exists in application start',()=>{
    let app = shallow(<ToDo />);
    expect(app.find('form').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.find('button').exists()).toBeTruthy();
    
});



    it('exist in our app' , () => {
    let test = shallow(<ToDo/>);
    expect(test.find('button').exists()).toBeTruthy();
 });


  it('click simulate test',()=>{
    let app = mount(<ToDo />);
    let button = app.find('button');
    button.simulate('click');
    expect(typeof button).toBe('object');
    expect(typeof app).toBe('object');
  });


  it('correct render', () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  
    it('Assert DOM in snapshot', ()=> {
      let test = renderer.create(<ToDo />);
      expect(test).toMatchSnapshot();
    });
});






// });
