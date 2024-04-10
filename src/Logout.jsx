export const sendLogout = (props) => {

    fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Hier können Sie den Token oder andere Authentifizierungsheader hinzufügen, falls erforderlich
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Beispiel für die Verwendung eines JWT-Tokens
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            localStorage.removeItem('token'); // Token aus dem Local Storage entfernen
            console.log('Logout successful, Token removed:', data);
            // props.handleLogout();
            // Wenn der Benutzer angemeldet ist, wechsle zur Dashboard-Seite
        })
        .catch(error => {
            console.error('Logout failed:', error);
            // Hier können Sie Fehler behandeln, z. B. eine Fehlermeldung anzeigen
            alert('Logout failed. Please try again.');
        });

}
    // return (
    //     <div className="auth-form-container">
    //         <h2>Login</h2>
    //         <form className="login-form" onSubmit={handleSubmit}>
    //             <label htmlFor="email">email</label>
    //             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    //             <label htmlFor="password">password</label>
    //             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
    //             <button type="submit">Log In</button>
    //         </form>
    //         <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    //     </div>
    // )