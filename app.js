let n = 0;

function render () {
    const title = React.createElement('h1', {},
        "Temps depuis l'ouverture de la page : ",
        React.createElement('span', {}, n),
        " seconde(s)"
    );

    ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
    n++
    render()
}, 1000)