import React from 'react'

const AddOption = (props) => {
    return (
        <div>
            <form onSubmit={props.addOption}>
                <input type='text' name='option'></input>
                <button>add option</button>
            </form>
        </div>)
}

export { AddOption as default }