import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    //required props: type, name (htmlFor, id) placeholder, pattern, minlength, handleChange, value, button's onClick
    const {
      type, 
      name, 
      instructions,
      placeholder, 
      pattern,
      minLength,
      value,
      handleChange,
      handleClick
    } = this.props;

    return (
      <div className="input-container">
        <label htmlFor={name}>
          <div>{instructions}</div>
        </label>
        <span className="indicator">→</span>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          minLength={minLength}
          onChange={handleChange}
          value={value}
          ref={this.input}
          required
          />
          <button 
            type="button"
            name={name}
            onClick={handleClick}
            >Continue
          </button>
      </div>
    )
  }
}

export default Input;