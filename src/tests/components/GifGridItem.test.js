import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
  
  const title = "Un titulo"
  const url = "https://localhost/algo.jpg"

  test('Should show component correctly', ()=>{
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    expect(wrapper).toMatchSnapshot();

  })
})