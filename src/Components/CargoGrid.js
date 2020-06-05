import React, { Component } from 'react'

import DetailsBlock from './DetailsBlock';

export default class CargoGrid extends Component {




    render() {
        return (
      
            <div className ="ui three column grid">
           
                <DetailsBlock name = {`${this.props.cargoNum}) Content:`} value = {this.props.eachCargo.description}/>

                <DetailsBlock name = "Type:" value = {this.props.eachCargo.type}/>

                <DetailsBlock name = "volume:" value = {this.props.eachCargo.volume}/>

            </div>
        )
    }
}
