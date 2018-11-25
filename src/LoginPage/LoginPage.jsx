import * as React from 'react';
import Login from '../components/Login/Login';
import './LoginPage.scss';

class LoginPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='login-content'>
                    <Login/>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;