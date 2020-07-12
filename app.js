
function WelcomeFunc ({name}) {
    return <h1>Bonjour {name}</h1>
}

class Welcome extends React.Component {

    constructor (props) {
        super();
        this.name = props.name;
    }

    render() {
        return <h1>Bonjour {this.name}</h1>
    }
}

ReactDOM.render(<Welcome name="Jean"/>, document.querySelector('#app'));