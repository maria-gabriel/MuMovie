import React, { Component } from "react";
import { Link } from "react-router-dom"

export class Back extends Component {
    render(){
        return(
            <Link className='button is-info' to='/'>Volver a Home</Link>
        )
    }
}