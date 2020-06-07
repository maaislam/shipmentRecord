import axios from 'axios'


const shipment = axios.create({

    baseURL: 'https://shipmentrecordserver.herokuapp.com/shipments',
    headers: {
        
    }


});

export default shipment;