import React from "react";
import { msalOneDrive } from "../config";
import { useGet } from "../hooks/useOneDrive";

export const OneDriveTest = () => {
    const [result, error] = useGet(msalOneDrive.listRoot);

    console.log("===> result:", result);
    console.error("===> error:", error);
    return <>MS Login success!</>;
};

