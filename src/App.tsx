import React, { useState } from 'react';
// import './App.css';
// import SignInJs from './components/SignIn.js';
// import SignIn from './components/SignIn';
// import log4js from 'log4js';
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import Blog from './blog/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Imprint from './blog/Imprint';
import AboutMe from './blog/AboutMe';
import AboutThisWebsite from './blog/AboutThisWebsite';
import TechInsights from './blog/TechInsights';
import LatestPosts from './blog/LatestPosts';
import ContactMe from './blog/ContactMe';

{/* <Router>
  <Routes>
  <Route path="/imprint" element={<Imprint />} />
    // Weitere Routen...
  </Routes>
</Router> */}


// const logger = log4js.getLogger('React-Logger');

// // Definieren Sie die Struktur der Benutzerinformationen
// interface UserInfo {
//   firstName: string;
//   lastName: string;
//   email: string;
//   company: string;
//   phoneNumber: string;
// }

// const App: React.FC = () => {
//   const [currentForm, setCurrentForm] = useState<string>('login'); // Typ hinzugefügt
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Typ hinzugefügt

//   const toggleForm = (formName: string): void => { // Typ hinzugefügt
//     setCurrentForm(formName);
//   }

//   // function App() {
//   //   const [currentForm, setCurrentForm] = useState('login');
//   //   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   //   const toggleForm = (formName: string) => {
//   //     setCurrentForm(formName);
//   //   }

//   const handleLogin = (): void => { // Typ hinzugefügt
//     console.log("handleLogin called");
//     setIsLoggedIn(true);
//     setCurrentForm("dashboard");
//   };

//   const handleLogout = (): void => { // Typ hinzugefügt
//     console.log("handleLogout called");
//     setIsLoggedIn(false);
//     setCurrentForm("login");
//     return;
//   };

//   // Initialisieren Sie die userInfo-Struktur für den Anfangszustand
//   const initialUserInfo: UserInfo = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     phoneNumber: "",
//   }

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard onLogout={handleLogout} userInfo={initialUserInfo} onFormSwitch={toggleForm} /> //Todo: "props={undefined}"" entfernen sobald in Dashboard usersettings und login entfernt wurde
//       ) : (
//         <>
//           {currentForm === "login" ? (
//             <Login onFormSwitch={toggleForm} handleLogin={handleLogin} />
//           ) : (
//             <Register onFormSwitch={toggleForm} />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Blog />
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/aboutThisWebsite" element={<AboutThisWebsite />} />
          <Route path="/techInsights" element={<TechInsights />} />
          <Route path="/latestPosts" element={<LatestPosts />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

