import React, { Component } from 'react';
import NewWindow from 'react-new-window'


import './RecordGrid.css'
import CargoGrid from './CargoGrid';
import DetailsBlock from './DetailsBlock';
import ServicesGrid from './ServicesGrid'
import EditButton from './EditButton'
import Modal from './Modal';
import shipment from '../api/shipment';
import NewTab from './NewTab';
import SummaryView from './SummaryView';


export default class RecordGrid extends Component {

   
    state = {nameEditClick: false, newName: this.props.record.name, newTab:false, showMore:false}

    renderCargoDetail = () =>{

        return this.props.record.cargo.map((eachCargo, i) => 
            
            <CargoGrid eachCargo = {eachCargo} key = {i+1} cargoNum = {i+1}/>

            
            )
    }

    renderServiceDetail = () => {

        return this.props.record.services.map((eachService, i) => 
            
            <ServicesGrid eachService = {eachService} key = {i+1} serviceNum = {i+1}/>

            
            )
    }

    shipmentModeIcon = () => {

        if (this.props.record.mode === 'sea'){
            return <i className ="ship icon"></i>
        }else if (this.props.record.mode === 'air'){
            return <i className ="plane icon"></i>
        }
    }

    editName = () => {

        
        this.setState({

            nameEditClick:true
        });
        
        
    }
    closeModal = () => {
        this.setState({

            nameEditClick:false
        });
    }


    onNameUpdateReq = async(newName) => {
        
        try {
            

            const put = await shipment.patch(`${this.props.record.id}`,{
                
               
                    name:newName
                
                
            }) 


            
            console.log(put.data.name);
            this.setState({newName:put.data.name})
            this.props.onShipmentNameUpdate();
        } catch (error) {
            this.setState({errorMsg: error});
        }





    }
    
    newTab = () => {

       this.setState({newTab:true})
    }
    renderNewTab = () => {


        if (this.state.newTab===true){
           
            return(
                <NewWindow 
                onUnload = {this.newTabBtn} 
                copyStyles = {true}
                features = {{menubar:1, toolbar: "yes"}}>
                    {this.renderShipmentDetail()}
                </NewWindow>
            ) 
        }
       
    }

    newTabBtn = () => {
        this.setState({newTab:false});
        console.log(this.state.newTab)
    }

    showMore = () => {

        this.setState(prevState => ({
           showMore: !prevState.showMore
          }),
          
          );

    }

    toggleView = () => {
        
        return this.state.showMore? 'open': 'close'
    }

    toggleShowMoreBtn = () => {

        return this.state.showMore?  <i className ="angle up large icon"></i> :  <i className ="angle down large icon"></i>
    }

    renderShipmentDetail = () => {

        if(this.props.onViewSummaryPress){

            return(
                <SummaryView 
                    shipmentId ={this.props.record.id}
                    shipmentName = {this.props.record.name}
                    status = {this.props.record.status}
                    mode = {this.shipmentModeIcon()}
                    origin = {this.props.record.origin}
                    destination = {this.props.record.destination}
                    bookingType = {this.props.record.type}/>
            )
        }else{

        return (

            <div className="ui one column grid custom-style">
                <div className="ui card one column grid">
                    <div className="content">
                        <div className=" center-fix cargo-text center aligned header">Shipment Details<span>
                        <NewTab newTab = {this.newTab} hideNewTabBtn = {this.state.newTab} /></span></div>  
                           
                        
                        <div className="ui four column grid set">
                            
                            <DetailsBlock name = "Shipment ID:" value = {this.props.record.id}/>
                            
                            <DetailsBlock name = "Shipment Status:" value = {this.props.record.status}/>
                        
                            <DetailsBlock name = "Shipment Mode:" value = {this.shipmentModeIcon()}/>
                            
                            <DetailsBlock name = "Booking Type:" value = {this.props.record.type}/>

                        </div>
                        
                       
                     

                        <div className="ui one column grid set" >
                            
                           
                            <DetailsBlock name = "Shipment Name:" value = {this.state.newName} >
                               <div onClick = {this.editName} ><EditButton /></div>
                            </DetailsBlock>
                            
                        </div>

                        <div className="ui one column grid set modal-position" >
                            
                           
                            <Modal 
                            onEditBtnClick = {this.state.nameEditClick}
                            onNameUpdateReq = {this.onNameUpdateReq} 
                            closeModal = {this.closeModal}/>
                           
                       </div>

                        <div className="ui two column grid set">
                            
                            <DetailsBlock name = "Origin:" value = {this.props.record.origin}/>
                        
                            <DetailsBlock name = "Destination:" value = {this.props.record.destination}/>
                            
                        </div>
                    </div>
                    
                </div>

                <div  className = "fourteen wide center aligned centered column">
                    <button onClick = {this.showMore} className ="ui icon teal button center">
                        {this.toggleShowMoreBtn()}
                    </button>
                </div>   
                

                <div className={`ui card one column grid ${this.toggleView()}`}>
                    <div className="content">
                        <div className=" cargo-text center aligned header">Cargo Details</div>
                        <div>{this.renderCargoDetail()}</div>
                    </div>
                </div>  

                 <div className={`ui card one column grid ${this.toggleView()}`}>
                    <div className="content">
                        <div className=" cargo-text center aligned header">Service Details</div>
                        <div>{this.renderServiceDetail()}</div>
                    </div>
                </div>
                
                <div className={`ui card one column grid ${this.toggleView()}`}>
                    <div className="content">
                        <div className=" cargo-text center aligned header">User Details</div>
                        <div className="ui two column grid">
                            <DetailsBlock name = "User ID:" value = {this.props.record.userId}/>
                            <DetailsBlock name = "Total Bill:" value ={`$${this.props.record.total} `}/>
                        </div>
                    </div>
                </div>


                  
            </div>
        
        )
    }
};


    



            render() {

                return(


                    <div>
                        {this.renderNewTab()}
                        {this.renderShipmentDetail()}
                    </div>
                    
                )
                    
                    
                
        }

}
