import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from '@mui/material/Button';

import { loginRequest } from "../config/oneDriveAutoConfig";

export const MsLoginButton = () => {
    const { instance } = useMsal();

    const onLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error("microsoft login failed", e);
            alert(e);
        });
    }

    return <Button variant="contained" onClick={onLogin}>Login to your Microsoft Account</Button>;
};