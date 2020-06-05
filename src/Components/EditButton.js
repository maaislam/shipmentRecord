import React, { Component } from 'react'

export default class EditButton extends Component {


    




    render() {
        return (
           
                    <div style = {{cursor:'pointer'}}>
                         <div className="ui vertical animated red button right floated" tabIndex="0">
                            <div className="hidden content">Edit</div>
                            <div className="visible content">
                                <i className="pencil icon"></i>
                            </div>
                        </div>
                    </div>
               
            
        )
    }
}
