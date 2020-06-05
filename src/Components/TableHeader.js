import React, { Component } from 'react'

export default class TableHeader extends Component {
    render() {
        return (

            <div>
            
                <div class="ui grid center aligned">
                    <div class="  two wide column">
                        <div class=" center aligned content">
                            <div class="description"><h3>Shipment ID</h3></div>
                        </div>
                    </div>
                    
                    <div class=" two wide column">
                        <div class="content">
                            <div class="description"><h3>Status</h3></div>
                        </div>
                    </div>
                    <div class=" one wide column">
                        <div class="content" style = {{marginLeft: '-1rem'}}>
                            <div class="description"><h3>Booking</h3></div>
                        </div>
                    </div>
                    <div class=" one wide column">
                        <div class="content">
                            <div class="description "><h3>Mode</h3></div>
                        </div>
                    </div>
                    <div class=" four wide column">
                        <div class="content">
                            <div class="description"><h3>Shipment Name</h3></div>
                        </div>
                    </div>
                    <div class=" two wide column">
                        <div class="content">
                            <div class="description"><h3>Origin</h3></div>
                        </div>
                    </div>
                    <div class=" three wide column">
                        <div class="content margin-adjust">
                            <div class="description"><h3>Destination</h3></div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
