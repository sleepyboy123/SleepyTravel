import React from 'react';
import firebase from './Firestore';

import styles from './GetTask.module.css';

class GetTask extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskName: ""
        }
    }
    
    fetchTasks = e => {
        const db = firebase.firestore();
        e.preventDefault();
        db.collection('tasks').where("TaskName", "==", this.state.taskName)
        .onSnapshot(snapshot => {
            const data = [];
            snapshot.forEach(doc => data.push({ ...doc.data()}))
            this.setState({
                tasks: data,
                taskName: ""
            })
        })
    }

    updateInput = e => {
        this.setState({
            taskName: e.target.value
        })
    }

    deleteTask(taskName, taskDescription) {
        const db = firebase.firestore();
        db.collection('tasks').where("TaskName", "==", taskName).where("TaskDescription", "==", taskDescription).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete();
            })
        })
    }

    render() {
        return (
            <div>
                <form className={styles.form} onSubmit={this.fetchTasks}>
                        <input className={styles.input} type="text" name="Username" placeholer="Username" onChange={this.updateInput} value={this.state.username}/>
                        <button type="submit">Search</button>
                </form>
                {this.state.tasks.length === 0 ? <div></div> : 
                <div>
                    <br></br>
                    <table className={styles.table}>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Delete</th>
                        </tr>
                        {this.state.tasks.map(item => {
                            return (
                                <tr>
                                    <td>{item.TaskName}</td>
                                    <td>{item.TaskDescription}</td>
                                    <button onClick={() => {this.deleteTask(item.TaskName, item.TaskDescription)}}>Delete</button>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                }
                
            </div>
        )
    }
}

export default GetTask;