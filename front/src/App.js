import './App.css';

function App() {
  return (
    <main>
      <div>
        <form method="post">
          <h1>Welcome!</h1>
            <p>
              <label for="mail">
                <div>Enter your email</div>
              </label>
              <input 
                type="email" 
                id="mail" 
                name="usermail" 
                placeholder="example@email.com" />
                <button type="button">Continue</button>
            </p>
            <p>
              <label for="pwd">
                <div>Create a password</div>
              </label>
              <input type="password" id="pwd" name="password" />
              <button type="button">Continue</button>
            </p>
            <p>
              <label for="username">
                <div>Enter a username</div>
              </label>
              <input type="text" />
              <button type="button">Continue</button>
            </p>
          <p>
            <fieldset>
              <legend>Updates and Announcements</legend>
              <p>Would you like to receive updates and announcements via email?</p>
              <ul>
                <li>
                  <label for="yes-updates">
                    <input type="radio" name="updates" id="yes-updates" value="true" />
                    Yes
                  </label>
                </li>
                <li>
                  <label for="no-updates">
                    <input 
                      type="radio" 
                      name="updates" 
                      id="no-updates" 
                      value="false" 
                      checked />
                    No
                  </label>
                </li>
              </ul>
            </fieldset>
          </p>
          <button type="submit">Create account</button>
        </form>
      </div>
    </main>
  );
}

export default App;
