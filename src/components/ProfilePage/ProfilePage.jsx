import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const ProfilePage = (props) => {
    return (  
        <React.Fragment>
            <div className="music_table">
                <form>
                    <div className="table">
                        <Table>
                            <tbody>
                                <tr>
                                    <td>First Name: {props.userData.firstName}</td>
                                    <td>Last Name: {props.lastName}</td>
                                    <td>Username: {props.userName}</td>
                                    <td>Email: {props.email}</td>
                                    <td>Phone Number: {props.phoneNumber}</td>                                    
                                </tr>
                                <Button variant="primary" onClick={() => props.edit(props.id)}>Update Profile</Button>
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

 
export default ProfilePage;