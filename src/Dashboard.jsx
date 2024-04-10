import React, { useState } from "react";
import { UserSettings } from "./UserSettings";
import { sendLogout } from './Logout';
import { Stream } from "./Stream";

export const Dashboard = ({ onLogout, onFormSwitch, userInfo }) => {
    const [currentForm, setCurrentForm] = useState('Dashboard');
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState(userInfo.password);
    const [firstName, setFirstName] = useState(userInfo.firstName);
    const [lastName, setLastName] = useState(userInfo.lastName);
    const [company, setCompany] = useState(userInfo.company);
    const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);

    const [videoUrl, setVideoUrl] = useState(null);

    const getUserData = () => {  //
        handleReset()
        const token = localStorage.getItem('token');

        // Fetch-Anfrage mit dem Token als Header
        fetch('http://localhost:8080/api/dashboard', {
            headers: {
                Authorization: `Bearer ${token}` // Token als Bearer-Token im Header senden
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Hier können Sie die Daten aus der Response weiterverarbeiten
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('email', data.email);
                // localStorage.setItem('firstName', data.firstName);
                // localStorage.setItem('lastName', data.lastName);
                // localStorage.setItem('company', data.company);
                // localStorage.setItem('phoneNumber', data.phoneNumber);
                setEmail(data.email);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setCompany(data.company);
                setPhoneNumber(data.phoneNumber);
                console.log('Data:', data);

            })
            .catch(error => {
                // Hier können Sie Fehlerbehandlung durchführen
                console.error('Error:', error);
            });

        fetch('http://localhost:8080/api/videoData', {
            headers: {
                Authorization: `Bearer ${token}` // Token als Bearer-Token im Header senden
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setVideoUrl(data.videoUrl);

            })
            .catch(error => {
                // Hier können Sie Fehlerbehandlung durchführen
                console.error('Error:', error);
            });
    }




    const handleLogout = () => {
        // Hier können Sie die Logik für die Abmeldung ausführen, z. B. das Löschen des Tokens aus dem Local Storage
        // console.log("Token : " + localStorage.getItem('token'))
        // localStorage.removeItem('token');
        // console.log("Token entfernt (null): " + localStorage.getItem('token'))
        sendLogout();
        onLogout();
    };

    const handleFormSwitch = (UserSettings) => {
        onFormSwitch(UserSettings);
    };

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    const handleUserSettings = () => {
        console.log("handleUserSettings called");
        setCurrentForm("UserSettings");
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setCompany('');
        setPhoneNumber('');
    };


    return (
        <>
            {currentForm === "UserSettings" ? (
                <UserSettings onFormSwitch={toggleForm} handleUserSettings={handleUserSettings} />
            ) : currentForm === "Stream" ? (
                <Stream onFormSwitch={toggleForm} />
            ) : (
                <div className="auth-form-container">
                    <h2>Dashboard</h2>
                    <form className="dashboard-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} readOnly />
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={firstName} readOnly />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={lastName} readOnly />
                        <label htmlFor="company">Company:</label>
                        <input type="text" id="company" name="company" value={company} readOnly />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} readOnly />
                        <label htmlFor="video">Video:</label>
                        <input type="text" id="video" name="video" value={phoneNumber} readOnly />
                        <video src="Streaming\demo\src\main\resources\videos" width="720" height="480" controls preload="none"></video>
                    </form>
                    {/* <button onClick={() => { toggleForm("UserSettings"); getUserData() }}>Update User Info</button> */}
                    <button onClick={() => toggleForm("UserSettings")}>Update User Info</button>
                    <button onClick={() => toggleForm("Stream")}>Stream</button>
                    <button onClick={() => toggleForm("changePassword")}>Change Password</button>
                </div>
            )}

            <div className="logout-button">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );

}
