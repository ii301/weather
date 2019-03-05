import React, {Component, Fragment} from 'react'
import Weather from './Weather'
import {Header} from './Layouts'
import SimpleCard from './Weather/SimpleCard'
// the line above is to do with clean importing 
// see the comments in './Layouts/Header.js'
export default class extends Component{
    render(){
        // put everything in a fragment
        return <Fragment>
            {/* the line below renders the header  */}
            <Header title="Weather Clothing App"/>
            <Weather />
            <SimpleCard/>
        </Fragment>
    }
}