import React from 'react';
import firebase from './Firestore';

class SetTask extends React.Component {
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
                <h4>Username</h4>
                <input type="text" name="Username" placeholer="Username" onChange={this.updateInput} value={this.state.Username}/>
                <h4>Task Name</h4>
                <input type="text" name="TaskName" placeholer="Task Name" onChange={this.updateInput} value={this.state.TaskName}/>
                <h4>Task Description</h4>
                <input type="text" name="TaskDescription" placeholer="Task Description" onChange={this.updateInput} value={this.state.TaskDescription}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SetTask;