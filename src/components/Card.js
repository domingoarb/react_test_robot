import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw1' >
      <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
      <div className="tc">
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}

export default Card;
