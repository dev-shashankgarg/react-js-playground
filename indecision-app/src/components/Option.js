import React from 'react'

const Option = (props) => {
    return (
        <li>{props.value}
            <button value={props.value} onClick={props.removeOption}>x</button>
        </li>
    )
}

export { Option as default }