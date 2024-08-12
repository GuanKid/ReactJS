import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Nav, NavLink} from 'react-bootstrap';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showDeleteDialog: false,
            selectedUser: {}
        };

        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(e) {
        firebase.database().ref('/' + this.state.selectedUser.key).remove()
            .then(x => {
                console.log("SUCCESS");
                this.closeDeleteDialog();
            })
            .catch(error => {
                alert("Could not delete the user.");
                console.log("ERROR", error)
            });
    }

    openDeleteDialog(user) {
        this.setState({
            showDeleteDialog: true,
            selectedUser: user
        });
    }

    closeDeleteDialog() {
        this.setState({
            showDeleteDialog: false,
            selectedUser: {}
        });
    }

    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                snapshot.forEach(data => {
                    var user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user);
                });
                this.setState({
                    users: returnArr
                })
            });
    }

    render() {
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.key}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <Button onClick={this.openDeleteDialog.bind(this, user)}>Remove</Button>
                </td>
            </tr>
        );
        return (
            <div>
                <Link to="/add">
                    <Button variant="primary">Add</Button>
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                    <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete {this.state.selectedUser.username}?</p>
                            <hr />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.delete}>Delete</Button>
                            <Button onClick={this.closeDeleteDialog}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Table>
            </div>
        );
    }
}
export default User;