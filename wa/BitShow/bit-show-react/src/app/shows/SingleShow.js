import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const SingleShow = (props) => {
    const { singleShow } = props;

    const showId = `/about/${singleShow.id}`
    
    return (
        <div className="card custom">
           <Link to={showId}> 
           <img className="card-img-top" src={singleShow.picture} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{singleShow.name}</h5>
            </div>
            </Link>
        </div>
    )
}

export { SingleShow };