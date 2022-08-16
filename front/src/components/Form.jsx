import React, {useState} from "react";
import Input from "./Input";
import CheckboxInput from "./CheckboxInput";

const Form = () => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      valid: false,
      shouldRender: true,
      reveal: "password",
      passFocusTo: 2
    },
    password: {
      value: "",
      valid: false,
      shouldRender: false,
      reveal: "username",
      passFocusTo: 4
    },
    username: {
      value: "",
      valid: false,
      shouldRender: false,
      reveal: "newsletter",
      passFocusTo: 6
    },
    newsletter: {
      value: false,
      valid: false,
      shouldRender: false,
      reveal: null
    },
  })

  const [focus, setFocus] = useState("email")

  function updateForm(event) {
    //updates value and valid
    const {type, name, value, checked} = event.target;
    const validity = event.target.checkValidity();

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: {
          ...prevFormData[name],
          value: type === 'checkbox' ? checked : value,
          valid: validity
        },
      }
    })
  }

  function updateFocus(event) {
    setFocus(event.type === "focus" ? event.target.name : undefined);
  }

  function proceed(event) {
    //changes focus
    //updates shouldRender
    const {name, value} = event.target;
    const reveal = formData[name].reveal;
    const formIndex = formData[name].passFocusTo;

    //executes iff input is valid
    if (!formData[name].valid) {
      event.target.previousSibling.focus();
    }
    else if (!formData[reveal].shouldRender) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [reveal]: {
            ...prevFormData[reveal],
            shouldRender: true,
          },
        }
      })
    } else {
      event.target.form[formIndex].focus();
    }
  }

  function submitForm() {
    if (formData.email.valid && formData.password.valid && formData.username.valid) {
      window.alert(`
        Form Data "Submitted"

        email: ${formData.email.value}
        password: ${formData.password.value}
        username: ${formData.username.value}
        newsletter: ${formData.newsletter.value}`);
    }
  }

  return (
    <div className="content-container">
      <div className="form-container">
        <form  noValidate onSubmit={submitForm}>
          <h3>Welcome to this fictional service!<br/>Your journey starts here</h3>

          <Input 
            type="email"
            name="email"
            instructions="Enter your email"
            placeholder="example@email.com"
            value={formData.email.value}
            handleChange={updateForm}
            handleClick={proceed}
            handleFocus={updateFocus}
            handleBlur={updateFocus}
            isValid={formData.email.valid}
            focus={focus}
          />
         
          {formData.password.shouldRender && 
          <Input 
            type="password"
            name="password"
            instructions="Create a password"
            //pattern: (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            value={formData.password.value}
            handleChange={updateForm}
            handleClick={proceed}
            handleFocus={updateFocus}
            handleBlur={updateFocus}
            isValid={formData.password.valid}
            focus={focus}
          />}
          
          {formData.username.shouldRender && 
          <Input 
            type="text"
            name="username"
            instructions="Enter a username"
            minLength="5"
            value={formData.username.value}
            handleChange={updateForm}
            handleClick={proceed}
            handleFocus={updateFocus}
            handleBlur={updateFocus}
            isValid={formData.username.valid}
            focus={focus}
          />}

          {formData.newsletter.shouldRender && 
          <CheckboxInput 
            name="newsletter"
            instructions="Send me the newsletter"
            handleChange={updateForm}
            value={formData.newsletter.value}
            handleFocus={updateFocus}
            handleClick={submitForm}
          />
          }
          <br/>
          {formData.email.shouldRender && formData.password.shouldRender && formData.username.shouldRender && formData.newsletter.shouldRender &&
          <button 
            id="submit"
            type="button"
            onClick={submitForm}
            className={
              formData.email.valid 
              && formData.password.valid 
              && formData.username.valid ? "valid" : "invalid"}
          >Create account
          </button>
          }
          
          {/* Hidden input to prevent enter key from submitting */}
          <input type="text" style={{display: "none"}} />
        </form>
      </div>
      <div className="hint-container">
        {focus === "email" && !formData.email.valid && formData.email.value.length > 0 &&
        <div id="email-err" className="hint">Email is invalid or already taken</div>
        }
        {focus === "password" && !formData.password.valid && formData.password.value.length > 0 &&
        <div className="hint">
          <div id="pw-hint">Make sure your password is at least 8 characters long and contains uppercase letters, lowercase letters, and numbers or symbols</div>
        </div>
        }
        {focus === "username" && !formData.username.valid && formData.username.value.length > 0 &&
        <div id="username-status" className="hint">Username {formData.username.value} is not available</div>
        }
      </div>
    </div>
  )
}

export default Form;