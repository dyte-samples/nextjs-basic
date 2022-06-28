import { useEffect } from 'react';
import { withRouter } from 'next/router'
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

function Meeting(props) {

    const [client, initClient] = useDyteClient();
    useEffect(() => {
        initClient({
            authToken: props.router.query.authToken,
            roomName: props.router.query.roomName,
        });
    }, [])

    return <>
        <DyteProvider value={client}>
            <div style={{ height: '100vh', width: '100vw' }}>
                <DyteMeeting mode="fill" meeting={client} />
            </div>
        </DyteProvider>
    </>
}

export default withRouter(Meeting)