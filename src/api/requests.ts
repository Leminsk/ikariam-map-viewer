import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3000"
});


export async function mapDataGET() {
    client.get('requestMapData').then((response) => {
        console.log('response:', response)
        return response
    }).catch(function (error) {
        console.log('mapDataGET ERROR:', error)
    })
}