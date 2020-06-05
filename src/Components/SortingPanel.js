import React, { Component } from 'react'

import './SortPanel.css'

export default class SortingPanel extends Component {

    state = {sortBy:'', sortOrderId:'true',sortOrderName:true, toggleIdBtn:false, toggleNameBtn:false}


    showPanel = () => {
       
       return  this.props.showSortingPanel? 'show' : 'hide'
    }



  //sortOrder true means ascending and false means descending

    toggleIdBtn = () => {
        this.setState(prevState => ({
            toggleIdBtn: !prevState.toggleIdBtn,
            sortBy: 'id',
            sortOrderId:!prevState.sortOrderId
          }),
          () => this.props.sortRecord(this.state.sortBy,this.state.sortOrderId)
          );

    }
    toggleNameBtn = () => {
        this.setState(prevState => ({
            toggleNameBtn: !prevState.toggleNameBtn,
            sortBy: 'name',
            sortOrderName:!prevState.sortOrderName
          }),
          () => this.props.sortRecord(this.state.sortBy,this.state.sortOrderName)
          );

    }

     //method for toggling sort number icon
    idBtnImage = () => {

        return (this.state.toggleIdBtn? 
         <i className="sort numeric up icon"></i> : <i className="sort numeric down icon"></i>)
    }

    //method for toggling sort alphabet icon
    nameBtnImage = () => {

        return (this.state.toggleNameBtn? 
         <i className="sort alphabet up icon"></i> : <i className="sort alphabet down icon"></i>)
    }



    render() {
        return (
            <div className = {`ui container sortpanel ${this.showPanel()}`}>
            <div className="ui segment fluid right aligned">

                <div onClick={this.toggleIdBtn} className="ui right labeled icon button">
                    <button  className="ui icon button">{this.idBtnImage()}</button>
                    <span className="text">Shipment ID </span> 
                </div>
               
                <div onClick={this.toggleNameBtn} className="ui right labeled icon button">
                    
                    <button  className="ui icon button">{this.nameBtnImage()}</button>
                    <span className="text">Shipment Name </span>
                </div>
                </div>
            </div>
        )
    }
}
