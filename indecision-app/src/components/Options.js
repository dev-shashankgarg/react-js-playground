import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <p>{props.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{props.options.length}</p>
            <ol>
                {props.options.map(option => <Option key={option} value={option} removeOption={props.removeOption}></Option>)}
            </ol>
        </div>
    )
}

export { Options as default }