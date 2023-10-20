import React, { Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectInfos from '../assets/projectinfo.json'

const SingleProject = () => {
    const { project } = useParams<{project: string}>()
    const projectDetails = ProjectInfos[project as keyof typeof ProjectInfos]

    return (
        <>
            {project && ProjectInfos.hasOwnProperty(project) ?
            projectDetails.name : 
            'Project not found'}
        </>
    )
}

export default SingleProject