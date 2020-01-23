console.log('index.js initialized')

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.makeChoice = this.makeChoice.bind(this)
        this.removeOptions = this.removeOptions.bind(this)
        this.removeOption = this.removeOption.bind(this)
        this.addOption = this.addOption.bind(this)

    }

    addOption(event) {
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

    makeChoice(event) {
        let randomNum = Math.floor(Math.random() * (this.state.options.length))
        alert(this.state.options[randomNum])
    }

    removeOptions(event) {
        this.setState(() => {
            return ({
                options: []
            })
        })
    }

    removeOption(event){
      let optionToBeDeleted = event.target.value
      let newOptions = [...this.state.options]
      let deleteIndex = newOptions.findIndex(option => option === optionToBeDeleted)

      if(deleteIndex > -1){
        newOptions.splice(deleteIndex,1)
      }

      this.setState(() => {
          return ({
              options : newOptions
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

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        )
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <button disabled={this.props.isDisabled} onClick={this.props.makeChoice}>what should i do?</button>
            <button onClick={this.props.removeOptions}>clear all options</button>
        </div>)
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>{this.props.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                <p>{this.props.options.length}</p>
                <ol>
                    {this.props.options.map(option => <Option key={option} value={option} removeOption={this.props.removeOption}></Option>)}
                </ol>
            </div>
        )

    }
}

class Option extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>{this.props.value}
                <button value={this.props.value} onClick={this.props.removeOption}>x</button>
            </li>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.addOption}>
                    <input type='text' name='option'></input>
                    <button>add option</button>
                </form>
            </div>)
    }
}




const appRoot = document.querySelector('#root')
ReactDOM.render(<IndecisionApp></IndecisionApp>, appRoot)

const pageContent = {
    title: 'Indecision App',
    subTitle: 'Put your life in hands of a computer',
    options: []
}

const addOption = (event) => {
    event.preventDefault()
    let newOption = event.target.elements.option.value
    pageContent.options.push(newOption)

    event.target.elements.option.value = ''
    render()
}

const removeOptions = (event) => {
    pageContent.options = []
    render()
}

const makeChoice = (event) => {
    let randomNum = Math.floor(Math.random() * (pageContent.options.length))
    alert(pageContent.options[randomNum])
}

const render = () => {
    const template = (
        <div>
            <h1>{pageContent.title}</h1>
            <p>{pageContent.subTitle}</p>
            <p>{pageContent.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{pageContent.options.length}</p>
            <button disabled={pageContent.options.length === 0} onClick={makeChoice}>what should i do?</button>
            <button onClick={removeOptions}>clear all options</button>
            <ol>
                {
                    pageContent.options.map(option => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={addOption}>
                <input type='text' name='option'></input>
                <button>add option</button>
            </form>

        </div>
    )

}

render()