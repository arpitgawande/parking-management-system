import React from 'react';
import Campus from '../common-components/campus/campus-component';

export default class AddUser extends React.Component {
    render() {
        return(
            <div>
                <h1>Add User</h1>
                <label>First Name:</label>
                <input type='text' name='firstName'/>
                <label>Last Name:</label>
                <input type='text' name='lastName'/>
                <label>Address:</label>
                <input type='text' name='address'/>
                <label>User Type:</label>
                <select>
                    <option value='student'>Student</option>
                    <option value='staff'>Staff</option>
                    <option value='resident'>Resident</option>
                </select>
                <label>Contact:</label>
                <input type='text' name='contact'/>
                <label>Campus:</label>
                <Campus />
                <input type='button' value='Add' onClick={() => alert("user added")}/>
            </div>
        );
    }
}