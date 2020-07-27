import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User';

import EditComponent from './EditComponent';

class AllUser extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <User post={post} key={post.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllUser);