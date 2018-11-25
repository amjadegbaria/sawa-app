import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ContactPage.scss';

class ContactPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>צור קשר</header>
                <div className='content'>
                    <div className="info">
                        <div>ramiti@tauex.tau.ac.il ראמי טיבי, עו"ס 03-6405569 </div>
                        <div> arees.bishara@gmail.com אריס בשארה, רכזת 03-6407758 </div>
                        <div>.משרדי תכנית סאווה נמצאים במעונות איינשטיין</div>
                    </div>
                    <form>
                        <div>
                            <TextField label="שם" variant="outlined"/>
                            <TextField label="טלפון" variant="outlined"/>
                        </div>
                        <TextField className='text' label="פנה אלינו" variant="outlined" multiline/>
                        <Button  variant="outlined" color="primary">שלח</Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;