import React from 'react'

const Action = (props) => {
    return (<div>
        <button disabled={props.isDisabled} onClick={props.makeChoice}>what should i do?</button>
        <button onClick={props.removeOptions}>clear all options</button>
    </div>)
}

export { Action as default }