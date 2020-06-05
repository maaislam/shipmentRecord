import React, { Component } from 'react'

import './SummaryView.css'

export default class SummaryView extends Component {
    render() {
        return (

            <div>
            <hr/>
                <div className="ui grid center aligned">
                    <div className=" two wide column">
                        <div className=" center aligned content">
                            <div className="description">{this.props.shipmentId}</div>
                        </div>
                    </div>
                    
                    <div className=" two wide column">
                        <div className="content">
                            <div className="description">{this.props.status}</div>
                        </div>
                    </div>
                    <div className=" one wide column">
                        <div className="content">
                            <div className="description">{this.props.bookingType}</div>
                        </div>
                    </div>
                    <div className=" one wide column">
                        <div className="content">
                            <div className="description" >{this.props.mode}</div>
                        </div>
                    </div>
                    <div className=" four wide column">
                        <div className="content">
                            <div className="description">{this.props.shipmentName}</div>
                        </div>
                    </div>
                    <div className=" two wide column">
                        <div className="content">
                            <div className="description">{this.props.origin}</div>
                        </div>
                    </div>
                    <div className=" three wide column">
                        <div className="content margin-adjust">
                            <div className="description">{this.props.destination}</div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
