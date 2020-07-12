function render () {
    const tasks = [
        'task 1',
        'task 2',
        'task 3'
    ];

    const todoList = <React.Fragment>
        <h1 className="todolist" id="todolist-1">TODO List :</h1>
        <ul>
            { tasks.map((task, index) => <li key={index}>{task}</li>) }
        </ul>
    </React.Fragment>;

    ReactDOM.render(todoList, document.querySelector('#app'));
}

render();