import * as React from "react";
import './About.scss';

class About extends React.PureComponent {
    render() {
        return (
            <div className='about'>
                <header>{this.props.header}</header>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default About;