import * as React from "react";
import './Login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends React.PureComponent {
    render() {
        return (
                <form className='login-form'>

                    <div className='username'>
                        <header>Sign In</header>
                        <TextField label="Username"/>
                        <TextField label="Password"/>
                    </div>
                    <Button variant="outlined" color="primary">Sign In</Button>

                    <meta name="google-signin-client_id" content="667050545105-26qqd49vacrmf6tv51dl48jes5ttk1h2.apps.googleusercontent.com"/>
                    <script src="https://apis.google.com/js/platform.js" async defer/>
                </form>


        );
    }
}

export default Login;