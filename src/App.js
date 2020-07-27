import React, { Component } from 'react';
import UserForm from './Components/UserForm';
import AllUser from './Components/AllUser';


class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm />
                <AllUser />
            </div>
        );
    }
}
export default App;