import React from "react";

const Form = () => {

  return (
    <div className="content-container">
      <div className="form-container">
        <form method="post">
          <h3>Welcome to this fictional service!<br/>Your journey starts here</h3>
          <p className="input-container">
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
          <p className="input-container">
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
          <p className="input-container">
            <label for="username">
              <div>Enter a username</div>
            </label>
            <input type="text" id="username" name="username" required/>
            <button type="button">Continue</button>
          </p>
          <p className="input-container">
          <div>
            <input type="checkbox" id="newsletter" name="news_letter" />
            <label for="newsletter">Send me the news letter</label>
          </div>
          </p>
          <button type="submit">Create account</button>
        </form>
      </div>
      <p className="hint-container">
        {/* Shown when active, email isn't valid, and user has input sth*/}
        <p id="email-err" className="hint">Email is invalid or already taken</p>
        {/* Shown when input is active */}
        <p>
          <meter className="pw-strength hint"></meter>
          <h4 className="pw-strength hint">Password is too short</h4>
          <p id="pw-hint" className="hint">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
        </p>
        {/* Shown when input is active */}
        <p id="username-status" className="hint">... is available</p>
      </p>
    </div>
  )
}

export default Form;