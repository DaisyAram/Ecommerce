import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      // Submit the form data to your API or backend
      console.log('Form submitted with email:', email);
      setError(null);
    }
  };

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='newsletter-container'>
      <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Weekly kicks magazine</p>
      <p style={{ textAlign: 'center' }}>Subscribe to our emails</p>

      <form className='newsletter-form' onSubmit={onSubmitHandler}>
        <input
          type='email'
          placeholder='Your email address'
          value={email}
          onChange={onChangeHandler}
        />
        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
        <button style={{ backgroundColor: 'grey', fontWeight: 'bold' }} type='submit'>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
