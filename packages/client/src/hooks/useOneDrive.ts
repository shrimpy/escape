import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";

import { msalLoginRequest } from "../config";

async function callMsGraph(accessToken: string, endpoint: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(endpoint, options)
        .then(response => response.json());
}

export const useGet = (endpoint: string) => {
    const { instance, accounts } = useMsal();
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...msalLoginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken, endpoint).then(response => {
                if (response && response.error) {
                    setError(response.error);
                }

                setResult(response);
            });
        }).catch(error => setError(error));
    }, [endpoint, setResult, setError]);

    return [result, error];
}