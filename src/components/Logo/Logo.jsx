import * as React from "react";
import './Logo.scss';
import logo from "../../images/logo.png";

class Logo extends React.PureComponent {
    render() {
        return (
            <div className='logo-container'>
                <div className='logo-text'>
                    <span>המדור לקידום סטודנטים</span>
                    <span>דקנאט הסטודנטים ע"ש רות ואלן זיגלר</span>
                    <span>אונבירסיטת תל אביב</span>
                </div>
                <img className='logo-image' id='logo' src={logo} alt='logo'  />
            </div>
        );
    }
}

export default Logo;