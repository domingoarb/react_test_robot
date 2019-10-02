import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
  return (
    <div>
			{			
				robots.map((usuario, i) => {
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}/>
				)})
			}
    </div>
  );
}

export default CardList;
