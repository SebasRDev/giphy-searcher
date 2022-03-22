import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test over GifGrid component', ()=>{
  const category = 'one punch man';

  test('Should match with snapshot', ()=>{
    useFetchGifs.mockReturnValue({
      data:[],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category}/>)
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should show items when the images are loaded with useFecth', () => {
    
    const gifs = [{
      id:'ABC',
      url: 'https://localhost/cualquier/test.jpg',
      title: 'test'
    },
    {
      id:'DEF',
      url: 'https://localhost/cualquier/test.jpg',
      title: 'test'
    }];

    useFetchGifs.mockReturnValue({
      data:gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category}/>);
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )

  })


})