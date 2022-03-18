import React from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme'

describe('tests for AddCategory', ()=>{

  const setCategories = jest.fn();
  let wrapper;
  
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  });

  test('should match with snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  test('should change value on input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo'
    input.simulate('change', { target: {value} });

    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('shouldn`t post info on submit', ()=>{
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect( setCategories ).not.toHaveBeenCalled();
  })

  test('should call setCategories and clear input text', ()=>{
    let value = 'one punch man';
    wrapper.find('input').simulate('change', { target: {value} });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    //para revisar que sea llamado
    expect(setCategories).toHaveBeenCalled();
    //para revisar que sea llamado una sola vez
    expect(setCategories).toHaveBeenCalledTimes(1);
    //para revisar que sea llamado con una funcion, si recibo algo que no sea una funcion da error
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
    expect(wrapper.find('input').prop('value')).toBe('')
  })

})