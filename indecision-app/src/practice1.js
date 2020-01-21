console.log('visibilty toggle app.js initialized!')

const appRoot = document.querySelector('#root')
let toggle = 1

const clickEvent = (event) => {
    toggle = (toggle + 1) % 2
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={clickEvent} >{toggle ? 'Show details' : 'Hide details'}</button>
            {!toggle ? <p>Hey, These are some details you can now see!</p> : undefined}
        </div>);

    ReactDOM.render(template, appRoot);
}

render()