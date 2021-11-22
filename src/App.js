import React from 'react';
import './App.css';
import List from "./List/List";
import Detail from "./Detail/Detail";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], showTaskDetail: null,};
    }

    async componentDidMount() {
        this.getTaskS()
    }

    openDetail(t) {
        this.setState({showTaskDetail: t});
    }

    closeDetail(t) {
        this.setState({showTaskDetail: null});
    }

    async finishTask(t) {
        await fetch('http://localhost:4000/tasks/' + t.UUID, {
            method: 'PUT',
            body: JSON.stringify({completedAt: new Date().toISOString()}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.closeDetail()
        await this.getTaskS()
    }

    componentWillUnmount() {
    }


    async getTaskS() {
        const tasks = await fetch('http://localhost:4000/tasks').then(r => r.json())
        this.setState({tasks});
    }

    render() {
        return (<div>
            {!!this.state.showTaskDetail ? (
                <Detail task={this.state.showTaskDetail}
                        finishTask={(d) => this.finishTask(d)}
                        onClose={(d) => this.closeDetail(d)}/>) : ''}
            <List openDetail={(t) => this.openDetail(t)}
                  tasks={this.state.tasks}/>
        </div>);
    }
}