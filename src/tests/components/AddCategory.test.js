import React from 'react';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme'

describe('tests for AddCategory', ()=>{

  const setCategories = () => {}
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('should match with snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

})