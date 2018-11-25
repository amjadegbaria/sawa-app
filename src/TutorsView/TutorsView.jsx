import * as React from "react";
import SideBar from './components/SideBar';
import './TutorsView.scss';
import StudentsTable from "../components/StudentsTable/StudentsTable";

class TutorsView extends React.Component {
    render() {
        return (
            <div className='tutors-container'>
                <StudentsTable/>
                <SideBar/>
            </div>
        );
    }
}

export default TutorsView;