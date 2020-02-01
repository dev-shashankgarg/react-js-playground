import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
    )
}

export { Header as default }