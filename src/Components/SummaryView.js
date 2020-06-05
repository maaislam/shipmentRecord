import React, { Component } from 'react'

import './SummaryView.css'

export default class SummaryView extends Component {
    render() {
        return (

            <div>
            <hr/>
                <div class="ui grid center aligned">
                    <div class=" two wide column">
                        <div class=" center aligned content">
                            <div class="description">{this.props.shipmentId}</div>
                        </div>
                    </div>
                    
                    <div class=" two wide column">
                        <div class="content">
                            <div class="description">{this.props.status}</div>
                        </div>
                    </div>
                    <div class=" one wide column">
                        <div class="content">
                            <div class="description">{this.props.bookingType}</div>
                        </div>
                    </div>
                    <div class=" one wide column">
                        <div class="content">
                            <div class="description" >{this.props.mode}</div>
                        </div>
                    </div>
                    <div class=" four wide column">
                        <div class="content">
                            <div class="description">{this.props.shipmentName}</div>
                        </div>
                    </div>
                    <div class=" two wide column">
                        <div class="content">
                            <div class="description">{this.props.origin}</div>
                        </div>
                    </div>
                    <div class=" three wide column">
                        <div class="content margin-adjust">
                            <div class="description">{this.props.destination}</div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
