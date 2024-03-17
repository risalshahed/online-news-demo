import React, { useContext, useEffect, useState } from 'react';
import Sport from './Sport';
import { AuthContext } from '../../Context/useNewContext';

export default function Sports() {
    const {getFilteredData}= useContext(AuthContext)
    const sportData = getFilteredData('খেলাধুলা');
    return (
       <div className='flex justify-center mx-8 my-10'>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                sportData.map(sport => (
                    <Sport key={sport.id} sport={sport} />
                ))
            }
        </div>
       </div>
    );
};

