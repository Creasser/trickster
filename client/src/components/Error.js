import { Alert } from "@mui/material";
import React from "react";

function Error({ err }){

    return(
        <div style={{paddingBottom: '5px'}}>
            <Alert severity="error">
                <strong>{err}</strong>
            </Alert>
        </div>
    )
}

export default Error