import React from 'react';

import Pagination from './Pagination'
import Searchbar from './Searchbar';
import RecordList from './RecordList'
import shipment from '../api/shipment';
import SortingPanel from './SortingPanel';

class App extends React.Component {

   
    state = {records:[], sortedRecord:[], errorMessage:'', totalResults: 0, currentPage:1, searchTerm:'', showSortingPanel:false,showSummaryView:false}


    


    onSearchQuerry =  (term) => {

        if(term!==''){
            
                this.makeApiCall(term);

                this.setState({ searchTerm:term,sortedRecord:[], showSortingPanel:false,showSummaryView:false})
            }
        }

    
    onViewAllQuerry = () => {

        this.makeApiCall();
        this.setState({sortedRecord:[], showSortingPanel:true,showSummaryView:false})

    }

    onViewSummaryPress = () => {
        this.makeApiCall();
        this.setState({sortedRecord:[], showSortingPanel:true,showSummaryView:true});
    }


    makeApiCall = async (term='', resultPerPage=20, pageNumber='') => {
        try {
                
            
            const response = await shipment.get(``,{

                params:{
                    q:term,
                    _limit:resultPerPage,
                    _page:pageNumber
                }

            }); 


            this.setState({records:response.data, totalResults:response.data.length})
           
            

        } catch (error) {
            this.setState({errorMessage: error});
        }

        
        }

        nextPage = (pageNumber) => {
           
            this.makeApiCall(this.state.searchTerm,20,pageNumber);
    
            this.setState({ currentPage: pageNumber} );
        };

    sortRecord = (sortBy, sortOrder) => {


            //create new array from this.state.records
        
        
        const sortRecord = this.state.records;
        
            //create a function to compare values & sort using the new array

            /************logic for sorting shipment ID in ascending (true) or descending (false) order******************/


        if (sortOrder===true && sortBy==='id'){
   
            sortRecord.sort((a,b) => {
            return (a.id.toUpperCase() < b.id.toUpperCase()) ? -1 : (a.id.toUpperCase() > b.id.toUpperCase()) ? 1 : 0}); 

        } else if(sortOrder===false && sortBy==='id') {
            
            sortRecord.sort((a,b) => {
            return (a.id.toUpperCase() < b.id.toUpperCase()) ? 1 : (a.id.toUpperCase() > b.id.toUpperCase()) ? -1 : 0});

                 /************logic for sorting shipment Name in ascending (true) or descending (false) order******************/

        } else if (sortOrder===true && sortBy==='name'){
            
            sortRecord.sort((a,b) => {
                return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0});

        } else if (sortOrder===false && sortBy==='name'){
            
            sortRecord.sort((a,b) => {
                return (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? -1 : 0});
        }

        

         this.setState({sortedRecord:sortRecord})
        
    }

    onShipmentNameUpdate = () => {

        //update the records array with new change
        this.makeApiCall();

    }

    

    renderConditionally = () => {

        if ( this.state.sortedRecord.length===0 && this.state.records.length!==0){
            
            return(
               <RecordList records = {this.state.records} onShipmentNameUpdate = {this.onShipmentNameUpdate} onViewSummaryPress = {this.state.showSummaryView} />
            )
        } else if (this.state.sortedRecord.length!==0){
            
            return(
                <RecordList records = {this.state.sortedRecord} onShipmentNameUpdate = {this.onShipmentNameUpdate} onViewSummaryPress = {this.state.showSummaryView} />
             )
        }
    }

    render() {
        const numberOfPages = Math.floor(this.state.totalResults / 20);
        return (
            
            <div>
                <Searchbar onSearchClick = {this.onSearchQuerry} onEnterPress = {this.onSearchQuerry} onViewAllPress = {this.onViewAllQuerry} onViewSummaryPress = {this.onViewSummaryPress}/>
                <SortingPanel sortRecord = {this.sortRecord} showSortingPanel = {this.state.showSortingPanel} hideSortingPanel = {this.state.showSortingPanel}/>
                {this.renderConditionally()}
                {this.state.totalResults > 2 ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
            </div>
        )
    }
}



export default App;