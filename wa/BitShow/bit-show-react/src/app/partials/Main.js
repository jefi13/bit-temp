import React from 'react';
import {ShowList} from '../shows/ShowList'

const Main = (props) => {

    const { showsData } = props;
    
    return(
        <div className="container">
        <h1>Popular Shows</h1>
        <div className="row mojDiv">
            <ShowList showsData={showsData}/>
        </div>
    </div>
    )
}

export { Main };