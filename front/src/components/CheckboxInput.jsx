import React, { Component } from "react";

class CheckboxInput extends Component {
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
      handleChange,
      value,
      handleClick,
      handleFocus
    } = this.props;
    return (
      <div className="input-container">
        <input 
          ref={this.input}
          type="checkbox" 
          id={name} 
          name={name}
          onChange={handleChange}
          checked={value} 
          onFocus={handleFocus}
          onKeyDown={event => {
            if (event.key === "Enter") {
              handleClick(event);
            } else {
              console.log(event.key);
            }
          }}
        />
        <label htmlFor={name}>{instructions}</label>
      </div>
    )
  }
}

export default CheckboxInput