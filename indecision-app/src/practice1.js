console.log('visibilty toggle app.js initialized!')

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.clickEvent = this.clickEvent.bind(this)
        this.state = {
            toggle: 1
        }
    }

    clickEvent() {
        this.setState((prevState) => {
            return { toggle: (prevState.toggle + 1) % 2 }
        })
    }

    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.clickEvent} >{this.state.toggle ? 'Show details' : 'Hide details'}</button>
            {!this.state.toggle ? <p>Hey, These are some details you can now see!</p> : undefined}
        </div>)
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#root'))