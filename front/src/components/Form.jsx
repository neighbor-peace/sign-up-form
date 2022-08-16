import React, {useState} from "react";
import Input from "./Input";

const Form = () => {
  const[formData, setFormData] = useState({
    email: {
      value: "",
      valid: false,
      shouldRender: true,
      reveal: "password"
    },
    password: {
      value: "",
      valid: false,
      shouldRender: false,
      reveal: "username"
    },
    username: {
      value: "",
      valid: false,
      shouldRender: false,
      reveal: "newsletter"
    },
    newsletter: {
      value: false,
      valid: false,
      shouldRender: false,
      reveal: null
    },
  })

  function updateForm(event) {
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


  function renderNextElement(event) {
    //changes focus
    //updates shouldRender
    const {name, value} = event.target;
    const reveal = formData[name].reveal;

    //executes iff input is valid
    if (!formData[name].valid) {
      console.log(`${name} is invalid`);
      return;
    }
    
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [reveal]: {
          ...prevFormData[reveal],
          shouldRender: true,
        },
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
          
          <Input 
            type="email"
            name="email"
            instructions="Enter your email"
            placeholder="example@email.com"
            pattern={false}
            minLength="0"
            value={formData.email.value}
            handleChange={updateForm}
            handleClick={renderNextElement}
          />
         
          {formData.password.shouldRender && 
          <Input 
            type="password"
            name="password"
            instructions="Create a password"
            placeholder=""
            //pattern: (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            minLength="0"
            value={formData.password.value}
            handleChange={updateForm}
            handleClick={renderNextElement}
          />}
          
          {formData.username.shouldRender && 
          <Input 
            type="text"
            name="username"
            instructions="Enter a username"
            placeholder=""
            pattern={false}
            minLength="5"
            value={formData.username.value}
            handleChange={updateForm}
            handleClick={renderNextElement}
          />}

          {formData.newsletter.shouldRender && 
          <div className="input-container">
            <input 
              type="checkbox" 
              id="newsletter" 
              name="newsletter"
              onChange={updateForm}
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
          </div>}
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