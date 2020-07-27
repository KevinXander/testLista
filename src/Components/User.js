import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div className="post">
                {/* <div className="post-container"> */}
                    <div className="children-container">
                    <h3>First name:</h3>
                    <p className="post_title">{this.props.post.name}</p>
                    <h3>Email:</h3>
                    <p className="post_title">{this.props.post.email}</p>
                    </div>
                    <div className="children-container">
                    <h3>Last name:</h3>
                    <p className="post_title">{this.props.post.lastname}</p>
                    <h3>Username:</h3>
                    <p className="post_title">{this.props.post.username}</p>
                    </div>
                
                    <div className="control-buttons">
                        <button className="edit"
                            onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                            }
                        >Editar</button>
                        
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default connect()(User);