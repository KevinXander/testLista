import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const lastname = this.getLastName.value;
        const email = this.getEmail.value;
        const username = this.getUsename.value;
        const data = {
            id: new Date(),
            name,
            lastname,
            email,
            username,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data});
        this.getName.value = '';
        this.getLastName.value = '';
        this.getEmail.value = '';
        this.getUsename.value = '';
          
    }
    render() {
        return (
            <div className="general-container">
                <div className="post-container">
                    <form className="form" onSubmit={this.handleSubmit} >
                        <div className="children-container">
                        <h3>First name:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getName = input}/>
                        <br /><br />
                        <h3>Email:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getEmail = input} placeholder="mail@domain.com" />
                        <br /><br />
                        <h3>User role(s):</h3>
                        <ul>
                        <li><input name="checked" type="checkbox" /> Administrator </li>
                        <li><input name="checked" type="checkbox" /> Member </li>
                        <li><input name="checked" type="checkbox" /> Contributor </li>
                        </ul>
                        </div>

                        <div className="children-container">
                        <h3>Last name:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getLastName = input} />
                        <br /><br />
                        <h3>Username:</h3>
                        <input className="form-input" required type="text" ref={(input) => this.getUsename = input} />
                        <br /><br />
                        <h3>User active:</h3>
                        <input name="radio" type="radio" value="yes"/>Yes
                        <input name="radio" type="radio" value="no"/>No
                        </div>
                        
                        <button type="submit" id="submit-form" className="hidden"></button>
                        
                    </form>
                    
                </div>
                <div><label for="submit-form" tabindex="0">Add New User</label></div>
            </div>
        );
    }
}
export default connect()(UserForm);