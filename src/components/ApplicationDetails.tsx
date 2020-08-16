import React from 'react'
import { Application } from "./../types/application"
import axios from "axios"
import env from "./../env"
import { HelperText, UserDetails } from "."

interface Props {
    applications: Application[] | undefined
}

const ApplicationDetails: React.FC<Props> = ({ applications }) => {
    return (
        <ul>
            {applications ?
                applications.map((application) => (
                    <li key={application.applicationId}>
                        <UserDetails application={application} />
                    </li>
                ))
                : null}
        </ul>
    )
}

export default ApplicationDetails
