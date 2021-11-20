import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch (props){
    return(
        <div style={{textAlign:'center'}}> 
            <div><img src='https://i.gifer.com/7VE.gif' alt='error' /></div>
            <h2>Oops, Error occured go<Link to='/'> back</Link></h2> 
        </div>
    )
}