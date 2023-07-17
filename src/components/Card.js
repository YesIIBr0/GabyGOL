import React from 'react';
import './Card.css';

function Card ({title,imageUrl,body}){
    return (
        <div class='card-container'>
            <div class="image-container">
                <img src={imageUrl} alt=''></img>
            </div>

            <div class="card-content">
                <div class="card-title">
                    <h3>{title}</h3>
                </div>
                <div class="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div class="btn">
                <button>
                    <a>View more</a>
                </button>
            </div>
        </div>
    );
}
export default Card;