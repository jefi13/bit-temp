import  React  from "react";
import { SingleShow } from './SingleShow'

const ShowList = (props) => {
    
    const {showsData} = props;
    console.log(showsData);
    
    const showsCards = showsData.map((show, index) => {
        return <SingleShow key={show.id} singleShow={show}/> 
    })
    
    return (
        <div className="row">
            {showsCards}
        </div>
    )
}


export { ShowList };