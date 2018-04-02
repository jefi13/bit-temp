import { constants } from './../shared/constants';

class GeoLocation {
    constructor({ lat, lng }) {
        this.latitude = lat;
        this.longitude = lng;
    }

    getGoogleMapUrl() {
        return `https://www.google.com/maps/embed/v1/view
            ?key=${constants.GOOGLE_MAPS_API_KEY}
            &center=${this.latitude},${this.longitude}
            &zoom=18
            &maptype=satellite`;
    }
}

export { GeoLocation };