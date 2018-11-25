import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CustomTableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../../data/students.json';

class StudentsTable extends React.Component {
    onNameClick(e){
       //TODO: show student details in modal
    }
    render() {
        const rows = data['students'];
        return (
            <Paper className='students-table'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>מפגש שלישי</CustomTableCell>
                            <CustomTableCell>מפגש שני</CustomTableCell>
                            <CustomTableCell>מפגש ראשון</CustomTableCell>
                            <CustomTableCell>שיחת טלפון</CustomTableCell>
                            <CustomTableCell>מייל</CustomTableCell>
                            <CustomTableCell>שם</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <CustomTableCell>{row.thirdMeeting}</CustomTableCell>
                                    <CustomTableCell>{row.secondMeeting}</CustomTableCell>
                                    <CustomTableCell>{row.firstMeeting}</CustomTableCell>
                                    <CustomTableCell>{row.phoneConversatin}</CustomTableCell>
                                    <CustomTableCell>{row.email}</CustomTableCell>
                                    <CustomTableCell>
                                        <a style={{color:'blue', cursor:'pointer'}} onClick={this.onNameClick}>{row.lastName} {row.firstName}</a>
                                    </CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default StudentsTable;