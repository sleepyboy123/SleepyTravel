import React from 'react';
import firebase from './Firestore';

class GetTask extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            username: ""
        }
    }
    
    fetchTasks = e => {
        const db = firebase.firestore();
        e.preventDefault();
        db.collection('tasks').where("Username", "==", this.state.username).get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map( doc => doc.data());
            this.setState({
                tasks: data,
                username: ""
            })
        })
    }

    updateInput = e => {
        this.setState({
            username: e.target.value
        })
    }

    deleteTask(username, taskName, taskDescription) {
        const db = firebase.firestore();
        db.collection('tasks').where("Username", "==", username).where("TaskName", "==", taskName).where("TaskDescription", "==", taskDescription).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete();
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetchTasks}>
                        <input type="text" name="Username" placeholer="Username" onChange={this.updateInput} value={this.state.username}/>
                        <button type="submit">Search</button>
                    </form>
                {this.state.tasks.length === 0 ? <div></div> : 
                <div>
                    <table>
                        <tr>
                            <th>Username</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                        </tr>
                        {this.state.tasks.map(item => {
                            return (
                                <tr>
                                    <td>{item.Username}</td>
                                    <td>{item.TaskName}</td>
                                    <td>{item.TaskDescription}</td>
                                    <button onClick={() => {this.deleteTask(item.Username, item.TaskName, item.TaskDescription)}}>Delete</button>
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