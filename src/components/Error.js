import React from 'react'
import { Alert } from 'reactstrap';

export const Error = ({mensaje}) => {
    return (
        <div>
            <Alert color="danger">{mensaje}</Alert>
        </div>
    )
}
