import React, { Component } from 'react'

export default class DetailsBlock extends Component {

    checkProps = () => {

        if (this.props.children){
           
            return (
                <div className = "record-item">
                    
                    <h4>{this.props.name}</h4>
                    <span>{this.props.value}</span>
                    {this.props.children}

                </div>
            )
        } else {
            return (
                <div className = "record-item">
                    
                    <h4>{this.props.name}</h4>
                    <p>{this.props.value}</p>
                    
                </div>
            )
        }
    }



    render() {
        return (
            
                <div className="column">
                    <div className="ui fluid card">
                        
                            {this.checkProps()}
                        
                    </div>
                </div>
            
        )
    }
}
