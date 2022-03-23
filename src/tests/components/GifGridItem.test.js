import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
  
  const title = "Un titulo"
  const url = "https://localhost/algo.jpg"
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('Should show component correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  test('should have a paragraph with the title', ()=>{
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  })

  test('should have th img equal to url and alt od props', () => {
    const img = wrapper.find('img');
    expect( img.props().src ).toBe( url );
    expect( img.props().alt ).toBe( title );
  })

  test('should have animate__backInUp', ()=>{
    const div = wrapper.find('div');
    const className = div.props().className;

    expect( className.includes('animate__backInUp') ).toBe(true);
  })

})