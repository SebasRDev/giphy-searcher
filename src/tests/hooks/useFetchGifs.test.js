import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('tests over custom hook useFetchGifs', ()=>{
  test('should return initial state', async() => { 
    const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('One Punch man'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  })
  
  test('sould return and img array and loanding false', async() => {
    const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('One Punch man'));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    
    expect( data.length ).toBe(10);
    expect(loading).toBeFalsy();
  })
})
