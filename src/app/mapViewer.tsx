import { mapDataGET } from 'src/api/requests'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Segment } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { MapType } from 'src/interfaces/MapType';

export async function mapLoader({ params }: LoaderFunctionArgs) {
    return params.filter;
}

export function MapViewer() {
    const filter = useLoaderData() as string;

    const [mapData, setMapData] = useState<MapType>({});

    useEffect(() => {
        mapDataGET().then(data => { 
            // debugging
            console.log('data:', data)
            setMapData(data); 
        });
    }, [])

    return (
        <>
            <Segment>
                Current filter: {filter}
            </Segment>
        </>
    )
}