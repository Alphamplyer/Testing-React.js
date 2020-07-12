let n = 55;

function timerFormat(n) {
    return new Date(n * 1000).toISOString().substr(11, 8)
}

function render () {
    const title = <h1>
        Temps depuis l'ouverture de la page : <br/>
        <span>{timerFormat(n)}</span>
    </h1>;

    ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
    n++
    render()
}, 1000);