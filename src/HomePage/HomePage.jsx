import * as React from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/Logo/Logo';
import ToolBar from '../components/ToolBar/ToolBar';
import Overview from '../Overview/Overview';
import LoginPage from '../LoginPage/LoginPage';
import ContactPage from '../ContactPage/ContactPage';
import TutorsView from '../TutorsView/TutorsView';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: props.view,
        };
        this.onTabChange = this.onTabChange.bind(this);
    }
    displayView()
    {
        switch (this.state.view){
            case 'overview': return (<Overview/>);
            case 'profile': return (<LoginPage/>);
            case 'contact': return(<ContactPage/>);
            case 'services': return(<TutorsView/>);
            default: return (<Overview/>);
        }
    }
    onTabChange(value){
        this.setState({view: value});
    }
    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <Logo/>
                <ToolBar onChange={this.onTabChange}/>
                {this.displayView()}
            </React.Fragment>
        );
    }
}
HomePage.propTypes = {
    /** which view to display */
    view: PropTypes.string,
};
ToolBar.defaultProps = {
    view: 'overview',
};

export default HomePage;