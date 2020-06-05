import React, { Component } from 'react'

export default class TableHeader extends Component {
    render() {
        return (

            <div>
            
                <div className="ui grid center aligned">
                    <div className="  two wide column">
                        <div className=" center aligned content">
                            <div className="description"><h3>Shipment ID</h3></div>
                        </div>
                    </div>
                    
                    <div className=" two wide column">
                        <div className="content">
                            <div className="description"><h3>Status</h3></div>
                        </div>
                    </div>
                    <div className=" one wide column">
                        <div className="content" style = {{marginLeft: '-1rem'}}>
                            <div className="description"><h3>Booking</h3></div>
                        </div>
                    </div>
                    <div className=" one wide column">
                        <div className="content">
                            <div className="description "><h3>Mode</h3></div>
                        </div>
                    </div>
                    <div className=" four wide column">
                        <div className="content">
                            <div className="description"><h3>Shipment Name</h3></div>
                        </div>
                    </div>
                    <div className=" two wide column">
                        <div className="content">
                            <div className="description"><h3>Origin</h3></div>
                        </div>
                    </div>
                    <div className=" three wide column">
                        <div className="content margin-adjust">
                            <div className="description"><h3>Destination</h3></div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
