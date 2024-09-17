import React from 'react';
import Card from './Card';

const CardFrame = ({fetch}) => {
    return(
        <>
            <h1 className='text-center px-8 py-12 text-[2vw]'>Photos</h1>
            <div className='flex gap-[2vw] flex-wrap justify-center'>
                {
                    fetch.map((data) => {
                        return(
                            <Card data={data}/>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default CardFrame;