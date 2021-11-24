import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const ProfilePage = (props) => {
    return (  
        <React.Fragment>
            <div className="Profile_Table">
                <form>
                    <div className="table">
                        <Table>
                            <tbody>
                                <tr>
                                    <td>First Name: {props.user.firstname}</td>
                                    <td>Last Name: {props.user.lastname}</td>
                                    <td>Username: {props.user.username}</td>
                                    <td>Email: {props.user.email}</td>
                                    <td>Phone Number: {props.user.phonenumber}</td> 
                                    <td><Button variant="primary" onClick={() => props.edit()}>Update Profile</Button></td>                                   
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

 
export default ProfilePage;