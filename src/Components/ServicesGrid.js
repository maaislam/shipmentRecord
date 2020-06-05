import React, { Component } from 'react'


import DetailsBlock from './DetailsBlock';



export default class ServicesGrid extends Component {
    render() {
        return (
            <div>
                  <DetailsBlock  name = {`${this.props.serviceNum}) Service Type:`} value = {this.props.eachService.type}/>
            </div>
        )
    }
}
