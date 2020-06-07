import React, { Component } from 'react'







export default class NewTab extends Component {

    

    
    newTab = (event) => {

        this.props.newTab();
    }

    hideNewTabBtn = () => {

        if(!this.props.hideNewTabBtn){
            return (
            
                <div  onClick = {this.newTab} className="ui right floated new-window" >
                        <button className="ui teal button"><i className="window restore icon"></i></button>
                </div>
            )
        }else {

            return(
                <div>
                    
                </div>
            )
        }
    }


    render() {
        return (
            
            <span>
                {this.hideNewTabBtn()}  
            </span>
        )
    }
}
