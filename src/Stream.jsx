import React, { useState, useEffect, useRef } from "react";
import { Dashboard } from "./Dashboard";
import { UserSettings } from "./UserSettings";


export const Stream = ({ onLogout, onFormSwitch, userInfo }) => {
    const [currentForm, setCurrentForm] = useState('Stream');
    const [email, setEmail] = useState('');



    const token = localStorage.getItem('token'); // Token aus dem Local Storage abrufen
    let videoElement = useRef(null);
    


    const fetchSegment = async (startRange, endRange) => {
        // handleReset()
        // Fetch-Anfrage mit dem Token als Header
        const response = await fetch('http://localhost:8081/api/video/Krypto_T1_V2', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Token als Bearer-Token im Header senden
                Range: `bytes=${startRange}-${endRange}` 
            }
        })
            .then(async response => {
                if (response.status === 206 || response.status === 200) {
                    const blob = await response.blob();
                    videoElement.current.src = URL.createObjectURL(blob);
                    // const contentRange = response.headers.get('Content-Range');
                    // fileSize = parseInt(contentRange.split('/')[1]);
                  } else {
                    console.error('Failed to fetch video: ', response.status);                    
                  }
            })
            .then(data => {
                // setVideoUrl(data.videoUrl);

            })
            .catch(error => {
                // Hier können Sie Fehlerbehandlung durchführen
                console.error('Error fetching video: ', error);
            });
    }

    useEffect(() => {
        console.log('useEffect was triggered'); //TODO (2mal)
        let end;
        const fetchAllSegments = async () => {
            for (let i = 0; i <= 34947603; i += 2000000) {
                end = i + 2000000;
                if (end <= 34947603) {
                    await fetchSegment(i, end - 1);
                } else {
                    await fetchSegment(i, 34947603);
                }
            }
        };

        fetchAllSegments();
    }, []);

    const handleLogout = () => {
        // Hier können Sie die Logik für die Abmeldung ausführen, z. B. das Löschen des Tokens aus dem Local Storage
        // console.log("Token : " + localStorage.getItem('token'))
        // localStorage.removeItem('token');
        // console.log("Token entfernt (null): " + localStorage.getItem('token'))
        onLogout();
    };

    const handleFormSwitch = (formName) => {
        onFormSwitch(formName);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        // Hier wird die Fetch-Anfrage ausgeführt, um die Registrierungsdaten an das Backend zu senden
    }

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    
    // const setVideoUrl = () => {
    //     videoUrl
    // }

    return (
        <>
            {currentForm === "UserSettings" ? (
                <UserSettings onFormSwitch={toggleForm} />
            ) : currentForm === "Dashboard" ? (
                <Dashboard onFormSwitch={toggleForm} />
            ) : (
        
        
            <div className="auth-form-container">
                <h2>Stream</h2>
                <form className="Stream-form">
                    <label htmlFor="video">Video:</label>
                    <video ref={videoElement} width="720" height="480" controls preload="none"></video>
                </form>
                <button onClick={() => handleFormSwitch('changePassword')}>Update user info</button>
                <button onClick={() => handleFormSwitch('updateUserInfo')}>Dashboard</button>
                <button onClick={() => handleFormSwitch('Stream')}>Stream</button>
                </div>
            )}

            <div className="logout-button">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );

}


// const mediaSource = new MediaSource();
// videoElement.current.src = URL.createObjectURL(mediaSource);
// mediaSource.addEventListener('sourceopen', sourceOpen);

// function sourceOpen() {
//   const sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
  
//   fetchSegment(0, 2000000)
//     .then(data => {
//       sourceBuffer.appendBuffer(data);
//     });
// }
