import React from 'react';
import firebase from './Firestore';

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            Username: "",
            TaskName: "",
            TaskDescription: ""
        }
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("tasks").add({
            Username: this.state.Username,
            TaskName: this.state.TaskName,
            TaskDescription: this.state.TaskDescription
        })
        this.setState({
            Username: "",
            TaskName: "",
            TaskDescription: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input type="text" name="Username" placeholer="Username" onChange={this.updateInput} value={this.state.Username}/>
                <input type="text" name="TaskName" placeholer="Task Name" onChange={this.updateInput} value={this.state.TaskName}/>
                <input type="text" name="TaskDescription" placeholer="Task Description" onChange={this.updateInput} value={this.state.TaskDescription}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Task;