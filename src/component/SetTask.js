import React from 'react';
import firebase from './Firestore';

import styles from './SetTask.module.css';

const auth = firebase.auth()

class SetTask extends React.Component {
    constructor() {
        super();
        this.state = {
            TaskName: "",
            TaskDescription: ""
        }
    }

    componentDidMount() {
        auth.signInWithEmailAndPassword('sleepysurvey123@gmail.com', 'Asdasd123%').then(cred => {

        })
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    addTask = e => {
        if (this.state.TaskName === "" || this.state.TaskDescription === "") {
            return 0;
        }
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
                <input className={styles.input} type="text" name="TaskName" autocomplete="off" placeholder="Task Name" onChange={this.updateInput} value={this.state.TaskName} required/>
                <input className={styles.input} type="text" name="TaskDescription" autocomplete="off" placeholder="Task Description" onChange={this.updateInput} value={this.state.TaskDescription} required/>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        )
    }
}

export default SetTask;