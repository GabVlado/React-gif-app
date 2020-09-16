import React,{Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);


    return (
        <Fragment>
            <h3>{category}</h3>
            {loading && <p>Loading</p> }
            <div className='card-grid'>
                
                {
                    images.map( (img) =>(
                        <GifGridItem 
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
            
            
            </div> 
        </Fragment>
    )
}

export default GifGrid
