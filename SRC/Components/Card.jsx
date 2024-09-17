import React from 'react';

const Card = ({data}) => {
    return(
        <div className='py-4 px-3 border border-gray-400 w-[20vw] flex flex-col items-center gap-[2vh]'>
            <div className="h-[30vh] w-[80%] overflow-hidden">
                <img src={data.url} alt="" height="100%" width="100%"/>
            </div>
            <h2 className='text-[1vw] font-bold text-center'>{data.title}</h2>
        </div>
    )
}

export default Card;