import React from 'react';
import firebase from './Firestore';

import styles from './SetTask.module.css';

class SetTask extends React.Component {
    constructor() {
        super();
        this.state = {
            TaskName: "",
            TaskDescription: ""
        }
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    addTask = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("tasks").add({
            TaskName: this.state.TaskName,
            TaskDescription: this.state.TaskDescription
        })
        this.setState({
            TaskName: "",
            TaskDescription: ""
        })
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.addTask}>
                <input className={styles.input} type="text" name="TaskName" autocomplete="off" placeholder="Task Name" onChange={this.updateInput} value={this.state.TaskName}/>
                <input className={styles.input} type="text" name="TaskDescription" autocomplete="off" placeholder="Task Description" onChange={this.updateInput} value={this.state.TaskDescription}/>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        )
    }
}

export default SetTask;