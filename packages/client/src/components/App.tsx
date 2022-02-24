import * as React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { MsLoginButton } from "./MsLoginButton";
import { OneDriveTest } from "./OneDriveTest";

export const App = () => {
    const isMsLogin = useIsAuthenticated();

    return <>
        <h1>Hello! App is ready!</h1>
        <br />

        {isMsLogin && <OneDriveTest />}
        {!isMsLogin && <MsLoginButton />}
    </>;
};