import React from 'react';

const AuthorAddress = ({ authorAddress }) => {
    const { street, city, zipcode, /* geoLocation */ } = authorAddress;

    // const mapUrl = geoLocation.getGoogleMapUrl();

    return (
        <div className="col s12">
            <div className="card horizontal blue lighten-3">
                <div className="card-stacked">
                    <div className="card-content blue-text text-darken-4">
                        <h5>Address</h5>
                        <p>street: {street}</p>
                        <p>city: {city}</p>
                        <p>zipcode: {zipcode}</p>
                    </div>
                </div>
                <div className="card-image" id="map">
                    <img src="https://via.placeholder.com/300x200/0d47a1/fff?text=Google+map" alt="Google Map" />
                    {/* <iframe src={mapUrl} width="300" height="200" frameBorder="0" style={{ border: 0 }} allowFullScreen title="Google Map"></iframe> */}
                </div>
            </div>
        </div>
    );
}

export { AuthorAddress };