import React from "react";
import { useParams } from "react-router-dom";

const Params = () => {
    const {email} = useParams()

    return(
        <div>
            <h1>Usuario: {email}</h1>
        </div>
    )
}

export default Params;