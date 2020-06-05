
import React, { Component } from 'react';

import RecordGrid from './RecordGrid'
import './RecordList.css'
import TableHeader from './TableHeader';


class Records extends Component {

 
    
    renderList=()=>{

        

        return this.props.records.map(record => 

            <RecordGrid 
                record = {record}
                key = {record.id}
                onShipmentNameUpdate = {this.props.onShipmentNameUpdate}
                onViewSummaryPress = {this.props.onViewSummaryPress}
            />     


        )



    }

    onViewSummaryPress = () => {
        if(this.props.onViewSummaryPress){
            return (
                <div className = "ui container record-list">
                    <TableHeader />
                    {this.renderList()}
                </div>
            )
        } else{
            return (
                <div className = "ui container record-list">
                    {this.renderList()}
                </div>
            )
        }
    }


    render() {
        return (
            <div >
               {this.onViewSummaryPress()}
            </div>
        );
    }
}

export default Records;
