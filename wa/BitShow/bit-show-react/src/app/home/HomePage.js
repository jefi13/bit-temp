import React from 'react';
import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';
import { Main } from '../partials/Main';

const HomePage = (props) => {

    const { showsData, onSearchValueChange } = props;
  
    return(
        <React.Fragment>
            <Header changeValue={onSearchValueChange}/>
            <Main showsData={showsData} />
            <Footer />
        </React.Fragment>
    )
}

export { HomePage };