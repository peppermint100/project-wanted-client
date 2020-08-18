import React from 'react'
import { Application } from "./../types/application"
import { UserDetails } from "."

interface Props {
    applications: Application[] | undefined
}

const ApplicationDetails: React.FC<Props> = ({ applications }) => {

    console.log(applications)
    return (
        <ul>
            {applications && typeof applications !== undefined && applications.length >= 0 ?
                applications.map((application) => (
                    <li key={application.applicationId}>
                        <UserDetails application={application} />
                    </li>
                ))
                : "해당 공고에 아직 지원자가 없습니다."}
        </ul>
    )
}

export default ApplicationDetails
