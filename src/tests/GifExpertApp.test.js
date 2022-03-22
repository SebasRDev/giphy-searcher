import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('test over GifExpertApp Component', () => {

  test('should match with snapshot', () => { 
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should show a categories list', () => { 
    const categories = ['one punch', 'dragon ball']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    
    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length).toBe(categories.length)
  })
})