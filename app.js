
function Welcome (props) {
    return <h1>Bonjour {props.name}</h1>
}

ReactDOM.render(<Welcome name="Jean"/>, document.querySelector('#app'));