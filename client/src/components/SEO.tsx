import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
    title: string,
    description: string,
    url: string,
    image: string,
    imageAlt: string,
    name?: string
}

const SEO = ({title, url, image, imageAlt, description, name}: Props) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={imageAlt} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            {/* <meta name="twitter:card" content="website" />
            <meta name="twitter:site" content={name} />
            <meta name="twitter:creator" content={name} /> */}
        </Helmet>
    )
}

export default SEO
