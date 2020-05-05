import React from 'react';
import firebase from './Firestore';

class GetTask extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('tasks').where("Username", "==", "sleepyboy").get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map( doc => doc.data());
            this.setState({
                tasks: data
            })
        })
    }

    render() {
        
        return (
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
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default GetTask;