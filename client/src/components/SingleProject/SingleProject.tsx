import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectInfos from '../../assets/projectinfo.json'
import Error404 from '../404/Error404'
import ToggleOnScroll from '../ToggleOnScroll'
import Footer from '../Footer'
import styles from './SingleProject.module.css'

const SingleProject = () => {
    const { project } = useParams<{project: string}>()
    const projectDetails = ProjectInfos[project as keyof typeof ProjectInfos]

    if (!project || !ProjectInfos.hasOwnProperty(project)) {
        return (
            <Error404 />
        )
    } else {
        return (
            <div id={styles.container}>
                {projectDetails.name}
            </div>
        )
    }
}

export default SingleProject