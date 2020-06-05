import React, { Component } from 'react'
import './Modal.css';




export default class Modal extends Component {

    state = {
        updatedName: ''
    }

    onNewNameAdd = (event)=>{

        this.setState({updatedName: event.target.value});
    }

    closeModal = () => {

        this.props.closeModal();
    }

    onConfirmClick = (event) => {

        event.preventDefault();
        
        if(this.state.updatedName!==''){
       
        this.props.onNameUpdateReq(this.state.updatedName);
        this.props.closeModal();
    }
         
    }

    onKeyPress = (event)=>{
        
        
        if(event.key === 'Enter' && this.state.updatedName!==''){
            this.props.onNameUpdateReq(this.state.updatedName);
            this.props.closeModal();
        }
    }



    renderModal = () => {
        if (this.props.onEditBtnClick===true){
            
            return (
                <div className="ui container" >
                        
                        <div className=  "modal-grid">
                            <h3 className="modal-header center aligned">Edit Shipment Name</h3>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Search a very wide input..."                    
                                    value = {this.state.updatedName}
                                    onChange = {this.onNewNameAdd}
                                    onKeyUp = {this.onKeyPress}
                                    />
                            </div>
                            
                            <div className="ui approve button" onClick = {this.onConfirmClick}>Confirm</div>
                            
                            <div className="ui cancel button" onClick = {this.closeModal}>Cancel</div>
                            
                        </div>
                </div>
                
            ) 
        }else return (
            <div>

            </div>
        )
    }



    render() {
        return (

            <div>{this.renderModal()}</div>
           
        )
    }
}
