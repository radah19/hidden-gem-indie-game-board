import React, { startTransition } from 'react';

const Card = (props) => {
    return(
        <div className='Card'>
            <a href={props.gameLink}>
                <img src={props.img} className='gameArt' alt="Game Image" />
            </a>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;