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
    const { 
      type, 
      name, 
      instructions,
      placeholder, 
      pattern,
      minLength,
      value,
      handleChange,
      handleClick,
      handleFocus,
      isValid,
      focus
    } = this.props;

    return (
      <div className="input-container">
        <label htmlFor={name}>
          <div>{instructions}</div>
        </label>
        {focus === name && <span className="indicator">→</span>}
        {focus !== name && !isValid && <span className="invalid indicator">×</span>}
        {focus !== name && isValid && <span className="valid indicator">✓</span>}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          minLength={minLength}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={value}
          ref={this.input}
          required
          />
          <button 
            type="button"
            name={name}
            onClick={handleClick}
            className={isValid && "valid"}
            >Continue
          </button>
      </div>
    )
  }
}

export default Input;