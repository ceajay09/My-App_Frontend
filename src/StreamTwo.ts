// import React, { useState, useEffect, FC } from "react";
// import { Dashboard } from "./Dashboard";
// import { UserSettings } from "./UserSettings";

// interface Props {
//   onLogout: () => void;
//   onFormSwitch: (formName: string) => void;
//   userInfo: {
//     email: string;
//     // Add other user info types here
//   };
// }

// export const Stream: FC<Props> = ({ onLogout, onFormSwitch, userInfo }) => {
//   const [currentForm, setCurrentForm] = useState<string>("Stream");
//   const [email, setEmail] = useState<string>("");

//   const token = localStorage.getItem("token");

//   const getUserData = () => {
//     fetch("http://localhost:8081/api/video/Krypto_T1_V2.mp4", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle data here
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const handleLogout = () => {
//     onLogout();
//   };

//   const handleFormSwitch = (formName: string) => {
//     onFormSwitch(formName);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(email);
//   };

//   const toggleForm = (formName: string) => {
//     setCurrentForm(formName);
//   };

//   const el = document.getElementById('container');

//   const btn = document.getElementById('btn');
  
//   if (el != null && btn != null) {
//     btn.addEventListener('click', function handleClick() {
//       if (el.style.display === 'none') {
//         // ✅ Shows element if hidden
//         el.style.display = 'block';
  
//         btn.textContent = 'Hide element';
//       } else {
//         // ✅ Hides element if shown
//         el.style.display = 'none';
  
//         btn.textContent = 'Show element';
//       }
//     });
//   }


//   return null
// }
//     <>
//       {currentForm === "UserSettings" ? (
//         <UserSettings onFormSwitch={toggleForm} />
//       ) : currentForm === "Dashboard" ? (
//         <Dashboard onFormSwitch={toggleForm} />
//       ) : (
//         <div className="auth-form-container">
//           <h2>Stream</h2>
//           <form className="Stream-form">
//             <label htmlFor="video">Video:</label>
//             <video width="720" height="480" controls preload="none"></video>
//           </form>
//           <button onClick={() => handleFormSwitch("changePassword")}>
//             Update user info
//           </button>
//           <button onClick={() => handleFormSwitch("Dashboard")}>
//             Dashboard
//           </button>
//           <button onClick={() => handleFormSwitch("Stream")}>Stream</button>
//         </div>
//       )}
//       <div className="logout-button">
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </>
//   );

