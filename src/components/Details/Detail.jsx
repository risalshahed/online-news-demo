import React from 'react'

export default function Detail({item}) {
    const {title, id , description, img} = item
    console.log(item);

    const addLineBreak = (description) =>
    description.split('\n').map((subStr) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });
    
  return (
    <div>
        <div className='lg:mx-10 mx-4'>
            <div className='my-8'>
            <p className='lg:text-4xl text-2xl'>{title}</p>
            </div>
           <div>
           <img className='w-[100%] h-[auto]' src={img} alt="" srcset="" />
           </div>
           <div className='my-8 lg:text-xl text-base'>
         <p className='text-justify'>  {addLineBreak(description)}</p>
           </div>
        </div>
    </div>
  )
}
