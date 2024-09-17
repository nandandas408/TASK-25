import { useState } from 'react';
import useFetch from './Hooks/useFetch';
import {CardFrame,Error,Loading} from './Components';

function App() {

  const [error , setError] = useState(false);
  const [loading , setLoading] = useState(true);

  const fetch = useFetch(setError,setLoading);
  console.log(fetch);

  return (
    <div className='min-h-screen bg-black bg-fixed text-white'>
      {
        error ? (loading ? <Loading /> : <Error />) : (loading ? <Loading /> : <CardFrame fetch={fetch}/>)
      }
    </div>
  )
}

export default App
