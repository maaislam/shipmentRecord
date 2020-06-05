import axios from 'axios'


const shipment = axios.create({

    baseURL: 'http://localhost:3000/shipments',
    headers: {
        
    }


});

export default shipment;