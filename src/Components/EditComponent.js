import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newLastName = this.getLastName.value;
        const newEmail = this.getEmail.value;
        const newUsername = this.getUsername.value;
       
        const data = {
            newName,
            newLastName,
            newEmail,
            newUsername,
          
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <div className="children-container">
                        <h3>First name:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getName = input}
                            defaultValue={this.props.post.name} /><br /><br />
                        <h3>Email:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getEmail = input}
                            defaultValue={this.props.post.email} /><br /><br />
                    </div>
                    <div className="children-container">
                        <h3>Last name:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getLastName = input}
                            defaultValue={this.props.post.lastname} /><br /><br />
                        <h3>Username:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getUsername = input}
                            defaultValue={this.props.post.username} /><br /><br />
                    </div>
                   <button className="edit">Actualizar</button>
                </form>
                <button className="delete"
                            onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
                        >X</button>
            </div>
        );
    }
}
export default connect()(EditComponent);