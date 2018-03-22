import React from 'react';
import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';

const AboutShow = (props) => {
    const id = props.match.params.id;
    console.log(id);
    
    return (
        <React.Fragment>
        <Header />
       
        <Footer />
        </React.Fragment>
    )
}

export { AboutShow };