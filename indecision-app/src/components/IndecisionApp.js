import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

class IndecisionApp extends React.Component {

    state = {
        options: []
    }

    addOption = (event) => {
        event.preventDefault()
        let newOption = event.target.elements.option.value
        this.setState((prevState) => {
            return (
                {
                    options: prevState.options.concat(newOption)
                }
            )
        })
        event.target.elements.option.value = ''
    }

    makeChoice = (event) => {
        let randomNum = Math.floor(Math.random() * (this.state.options.length))
        alert(this.state.options[randomNum])
    }

    removeOptions = (event) => {
        this.setState(() => {
            return ({
                options: []
            })
        })
    }

    removeOption = (event) => {
        let optionToBeDeleted = event.target.value
        let newOptions = [...this.state.options]
        let deleteIndex = newOptions.findIndex(option => option === optionToBeDeleted)

        if (deleteIndex > -1) {
            newOptions.splice(deleteIndex, 1)
        }

        this.setState(() => {
            return ({
                options: newOptions
            })
        })

    }

    render() {
        const title = 'Indecision App'
        const subTitle = 'Put your life in hands of a computer'

        return (
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action isDisabled={this.state.options.length === 0} makeChoice={this.makeChoice} removeOptions={this.removeOptions}></Action>
                <Options options={this.state.options} removeOption={this.removeOption}></Options>
                <AddOption addOption={this.addOption}></AddOption>
            </div>
        )
    }
}

export { IndecisionApp as default }