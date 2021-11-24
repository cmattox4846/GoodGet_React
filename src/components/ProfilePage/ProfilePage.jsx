import React from 'react';

const ProfilePage = (props) => {
    return (  
        <React.Fragment>
            <div className="music_table">
                <form>
                    <div className="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>First Name: {props.userData.firstName}</td>
                                    <td>Last Name: {props.lastName}</td>
                                    <td>Username: {props.userName}</td>
                                    <td>Email: {props.email}</td>
                                    <td>Phone Number: {props.phoneNumber}</td>
                                    <button onClick={() => props.edit(props.id)}>Update Profile</button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

 
export default ProfilePage;