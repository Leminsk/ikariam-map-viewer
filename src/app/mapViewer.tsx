import { mapDataGET } from 'src/api/requests'
import { useLoaderData } from 'react-router-dom'
import { Segment } from 'semantic-ui-react';

export async function mapLoader() {
    const response = await mapDataGET();
    return { response };
}

export function MapViewer() {
    // const { mapData } = useLoaderData();
    const blob = useLoaderData();
    console.log('blob:', blob)

    return (
        <>
            <Segment>
                Test?
            </Segment>
        </>
    )
}