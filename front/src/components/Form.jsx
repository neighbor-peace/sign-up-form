import React, {useState} from "react";

const Form = () => {
  const[formData, setFormData] = useState({
    email: {
      value: "",
      valid: false,
      hidden: false,
      reveal: "password"
    },
    password: {
      value: "",
      valid: false,
      hidden: true,
      reveal: "username"
    },
    username: {
      value: "",
      valid: false,
      hidden: true,
      reveal: "newsletter"
    },
    newsletter: {
      value: false,
      valid: false,
      hidden: true,
      reveal: null
    },
    activeField: 'email'
  })

  function handleChange(event) {
    //updates value and valid
    const {type, name, value, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: {
          ...prevFormData[name],
          value: type === 'checkbox' ? checked : value,
          valid: event.target.checkValidity()
        },
      }
    })
  }


  function revealNextElement(event) {
    //executes iff input is valid
    if (!formData[name].valid) return;
    //changes focus
    //updates hidden
    const {name, value} = event.target;
    const reveal = formData[name].reveal;

    



    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [reveal]: {
          ...prevFormData[reveal],
          hidden: false,
        },
        activeField: reveal
      }
    })
  }

  function submitForm() {
    window.alert(`
      Form Data "Submitted"
      email: ${formData.email.value}
      password: ${formData.password.value}
      username: ${formData.username.value}
      newsletter: ${formData.newsletter.value}`);
  }

  console.log(formData)

  return (
    <div className="content-container">
      <div className="form-container">
        <form  noValidate >
          <h3>Welcome to this fictional service!<br/>Your journey starts here</h3>
          <div className="input-container">
            <label htmlFor="mail">
              <div>Enter your email</div>
            </label>
            <span id="mail-validation-indicator" className="indicator">→</span>
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              value={formData.email.value}
              ref={this}
              required
              />
              <button 
                type="button"
                name="email"
                onClick={revealNextElement}
                >Continue
              </button>
          </div>
          <div className={`input-container ${formData.password.hidden && "hidden"}`}>
            <label htmlFor="pwd">
              <div>Create a password</div>
            </label>
            <span id="pwd-validation-indicator" className="indicator">→</span>
            <input
              type="password"
              id="pwd"
              name="password"
              onChange={handleChange}
              value={formData.password.value}
              //pattern: (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
              />
            <button 
            type="button"
            name="password"
            onClick={revealNextElement}
            >Continue</button>
          </div>
          <div className={`input-container ${formData.username.hidden && "hidden"}`}>
            <label htmlFor="username">
              <div>Enter a username</div>
            </label>
            <span id="username-validation-indicator" className="indicator">→</span>
            <input 
              type="text" 
              id="username" 
              name="username" 
              onChange={handleChange}
              value={formData.username.value}
              minLength="5"
              required
            />
            <button 
            type="button"
            name="username"
            onClick={revealNextElement}
            >Continue</button>
          </div>
          <div className={`input-container ${formData.newsletter.hidden && "hidden"}`}>
            <input 
              type="checkbox" 
              id="newsletter" 
              name="newsletter"
              onChange={handleChange}
              checked={formData.newsletter.value} 
            />
            <label htmlFor="newsletter">Send me the newsletter</label>
            <br/>
            <button 
              id="submit"
              type="button"
              onClick={submitForm}
            >Create account
            </button>
          </div>
        </form>
      </div>
      <div className="hint-container">
        {/* Shown when active, email isn't valid, and user has input sth*/}
        <div id="email-err" className="hint">Email is invalid or already taken</div>
        {/* Shown when input is active */}
        <div>
          <meter className="pw-strength hint"></meter>
          <div className="pw-strength hint">Password is too short</div>
          <div id="pw-hint" className="hint">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</div>
        </div>
        {/* Shown when input is active */}
        <div id="username-status" className="hint">... is available</div>
      </div>
    </div>
  )
}

export default Form;