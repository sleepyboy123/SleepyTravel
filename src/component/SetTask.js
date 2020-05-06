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
                <div>
                    <h4 className={styles.tag}>Task Name</h4>
                    <input className={styles.input} type="text" name="TaskName" placeholer="Task Name" onChange={this.updateInput} value={this.state.TaskName}/>
                </div>
                <div>
                    <h4 className={styles.tag}>Task Description</h4>
                    <input className={styles.input} type="text" name="TaskDescription" placeholer="Task Description" onChange={this.updateInput} value={this.state.TaskDescription}/>
                </div>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        )
    }
}

export default SetTask;