import React from "react";

const Form = () => {

  return (
    <div class="content-container">
      <div class="form-container">
        <form method="post">
          <h3>Welcome to this fictional service!<br/>Your journey starts here</h3>
          <p class="input-container">
            <label for="mail">
              <div>Enter your email</div>
            </label>
            <input
              type="email"
              id="mail"
              name="usermail"
              placeholder="example@email.com"
              required />
              <button type="button">Continue</button>
          </p>
          <p class="input-container">
            <label for="pwd">
              <div>Create a password</div>
            </label>
            <input
              type="password"
              id="pwd"
              name="password"
              minLength="8"
              required />
            <button type="button">Continue</button>
          </p>
          <p class="input-container">
            <label for="username">
              <div>Enter a username</div>
            </label>
            <input type="text" id="username" name="username" required/>
            <button type="button">Continue</button>
          </p>
          <p class="input-container">
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
      <p className="hint-container">
        {/* Shown when active, email isn't valid, and user has input sth*/}
        <p id="email-err" class="hint">Email is invalid or already taken</p>
        {/* Shown when input is active */}
        <p>
          <meter class="pw-strength"></meter>
          <h4 class="pw-strength">Password is too short</h4>
          <p id="pw-hint" class="hint">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
        </p>
        {/* Shown when input is active */}
        <p id="username-status" class="hint">... is available</p>
      </p>
    </div>
  )
}

export default Form;