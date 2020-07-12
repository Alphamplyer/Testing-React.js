
function Welcome ({name}) {
    return <h1>Bonjour {name}</h1>
}

ReactDOM.render(<Welcome name="Jean"/>, document.querySelector('#app'));