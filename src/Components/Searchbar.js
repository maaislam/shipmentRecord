import React, { Component } from 'react';



import './Searchbar.css'

export default class Searchbar extends Component {


    state = {searchTerm:''}
    

    onInputChange = (event)=>{

        this.setState({searchTerm: event.target.value});
    }


    onKeyPress = (event)=>{
        
        
        if(event.key === 'Enter'){
            this.props.onEnterPress(this.state.searchTerm);
        }
    }

    onViewAllPress = (event) => {

            event.preventDefault();
            this.props.onViewAllPress();
    }

    onSearchPress = (event)=>{
        event.preventDefault();
        
             this.props.onSearchClick(this.state.searchTerm);
        
       
    }

    onViewSummaryPress = (event) => {
        event.preventDefault();
        this.props.onViewSummaryPress()
    }

    render() {
        return (
            <div className = "ui container searchbar">
                <h1 className="ui header">Shipment Record</h1>
                <div className="ui segment fluid input searchbar-item">
                    <input 
                    type="text" 
                    //pattern="(S|s)[0-9]{4,}" --- uncomment if strictly search by ID alone is required
                    placeholder="Search by shipment ID or any detail..."
                    value = {this.state.searchTerm}
                    onChange = {this.onInputChange}
                    onKeyUp = {this.onKeyPress} />
                    
                    <button className="ui blue button" onClick = {this.onSearchPress}>Search</button>
                    <button className="ui green button" onClick = {this.onViewAllPress}>Detailed View</button>
                    <button className="ui brown button" onClick = {this.onViewSummaryPress}>Summary View</button>
                     
                </div>
            </div>
        )
    }
}
