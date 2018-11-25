import * as React from 'react';
import PropTypes from 'prop-types';
import './ToolBar.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from "@material-ui/core/Tab/Tab";

class ToolBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'overview',
        }
        this.onChange=this.onChange.bind(this);
    }
    onChange(event, value) {
        this.props.onChange(value);
        this.setState({selected: value});
    }
    render() {
        return (
            <Tabs onChange={this.onChange} className='bar-tabs' value={this.state.selected}>
                <Tab value='profile' label="החשבון שלך"/>
                <Tab value='contact' label="צור קשר"/>
                <Tab value='updates' label="עדכונים"/>
                <Tab value='lessons' label="התגבורים שלנו"/>
                <Tab value='services' label="השירותים שלנו"/>
                <Tab value='overview' label="על התכנית"/>
            </Tabs>
        );
    }
}
ToolBar.propTypes = {
    /** external onChange function */
    onChange: PropTypes.func,
};
ToolBar.defaultProps = {
    onChange: (e)=>(e),
};
export default ToolBar;