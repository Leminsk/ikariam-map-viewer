import axios from "axios";
import { MapType } from "src/interfaces/MapType";

const client = axios.create({
    baseURL: "http://localhost:3000"
});


export async function mapDataGET(): Promise<MapType> {
    return client.get('requestMapData').then((response) => {
        return response.data
    }).catch(function (error) {
        console.log('mapDataGET ERROR:', error)
        return {}
    })
}