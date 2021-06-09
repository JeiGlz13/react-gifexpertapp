import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    /* const [images, setImages] = useState([]);

    */

    const {data: images, loading} = useFetchGifs(category);

    return (
        <Fragment> 
            <h3 className="animate__fadeInDownBig animate__delay-2s">{category}</h3>

            {loading && <p>Loading...</p>}

            <div className ="card-grid">
                    {

                         images.map(img =>(
                            <GifGridItem key= {img.id} {...img}/>
                        ))
                    }
            </div> 
        </Fragment>
    )
}
