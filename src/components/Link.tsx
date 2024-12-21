import React from 'react'

export interface LinkInterface {
    destinationHref?: string;
    classNameString?: string;
    linkTextString: string;
}

const Link = ({ destinationHref = "#", classNameString = undefined, linkTextString }: LinkInterface) => {
    return (
        <a
            href={destinationHref}
            className={classNameString}
        >{linkTextString}</a>
    )
}

export default Link