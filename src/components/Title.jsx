import React from 'react';

const Title = ({text1, text2}) => {
  return (
    <div className='title'>
        <p className='text1'>{text1}<span className='text2'>{text2}</span></p>
        <p className='line'></p>
      
    </div>
  );
}

export default Title;
