import axios from 'axios'


const shipment = axios.create({

    baseURL: 'http://localhost:5000/shipments',
    headers: {
        
    }


});

export default shipment;