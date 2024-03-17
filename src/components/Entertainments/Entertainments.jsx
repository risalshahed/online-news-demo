import React, { useContext, useEffect, useState } from 'react';
import Entertainment from './Entertainment';
import { AuthContext } from '../../Context/useNewContext';

export default function Entertainments() {

    const {getFilteredData}= useContext(AuthContext)
    const entertainments = getFilteredData('বিনোদন');

    return (
       <div className='flex justify-center mx-8 my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                entertainments.map(entertainment => (
                    <Entertainment key={entertainment.id} entertainment={entertainment} />
                ))
            }
        </div>
       </div>
    );
};

