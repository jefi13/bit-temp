import { GeoLocation } from './GeoLocation';

class Address {
    constructor({ street, city, zipcode, geo }) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.geoLocation = new GeoLocation(geo);
    }
}

export { Address };