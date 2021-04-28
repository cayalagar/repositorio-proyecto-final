import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

const Map=(props)=>{
    return (
        <GoogleMap defaultZoom={10} 
            defaultCenter={{ lat:  -12.0431800, lng:  -77.0282400 }}
         />   
    );
};

export default withScriptjs(
    withGoogleMap(Map))