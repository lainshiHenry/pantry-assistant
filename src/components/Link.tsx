import React from 'react'

export interface LinkInterface {
    destinationHref?: string
}

const Link = ({ destinationHref = "#" }: LinkInterface) => {
    return (
        <a href={destinationHref}>Link</a>
    )
}

export default Link