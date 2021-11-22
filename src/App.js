import React from 'react';
import './App.css';
import List from "./List/List";
import Detail from "./Detail/Detail";
import Import from "./Import/Import";
import * as api from "./api.helper.js";

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
        await api.put('/tasks/' + t.UUID, {completedAt: new Date().toISOString()})
        this.closeDetail()
        await this.getTaskS()
    }

    componentWillUnmount() {
    }


    async getTaskS() {
        const tasks = await api.get('/tasks')
        this.setState({tasks});
    }

    async importTasks(target) {
        const v = target.value;
        target.value = ""
        await api.get('/import/' + v)
        await this.getTaskS()
    }

    render() {
        return (<div>
            {!!this.state.showTaskDetail ? (
                <Detail task={this.state.showTaskDetail}
                        finishTask={(d) => this.finishTask(d)}
                        onClose={(d) => this.closeDetail(d)}/>) : ''}
            <Import importTask={(e) => this.importTasks(e)}/>
            <List openDetail={(t) => this.openDetail(t)}
                  tasks={this.state.tasks}/>
        </div>);
    }
}