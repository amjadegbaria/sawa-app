import * as React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.scss';
class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: false,
        }
    }

    render() {
        return (
            <div className='tutors-sidebar'>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="החניכים שלי" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default SideBar;