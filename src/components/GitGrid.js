import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GitGridItem } from './GitGridItem';
//import { getGifs } from './helpers/getGifs';

export const GitGrid = ({ category }) => {
      

    const {data, loading} = useFetchGifs(category);
//  const [image, setImage] = useState([])
//     useEffect(() => {
//      getGifs(category).then(setImage);
    
      
//     }, [ category])
    
        
    
    return (
        <>
        <h3>{category}</h3>
     {loading && <p>Cargando..</p> }
        <div className='card-grid'>
        {
              data.map( img => (
                   <GitGridItem 
                   key={img.id}
                   {...img}
                   />
                   
                ))
                }
                
            
        </div></>
    )
}
