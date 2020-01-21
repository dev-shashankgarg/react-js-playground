console.log('index.js initialized')

const appRoot = document.querySelector('#root')

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
    ReactDOM.render(template, appRoot)
}

render()