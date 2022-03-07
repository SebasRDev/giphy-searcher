import { getGifs } from '../../helpers/getGifs';

describe('tests with getGifs Fetch', ()=>{
  test('should return 10 elements', async()=>{
    const gifs = await getGifs('One punch');
    expect( gifs.length ).toBe(10);
  })

  test('should return void array', async()=>{
    const gifs = await getGifs('');
    expect( gifs.length ).toBe(0)
  })
})