# Mock Sign Up Form
A sign-up form for an imaginary service
Check it out here: https://neighbor-peace.github.io/sign-up-form/

# Goals
- Create a beautiful and dynamic sign up form
- Learn how to create forms in React
- Use newly learned skills for vanilla CSS 

# Lessons Learned
## React
- Extending React.Component is the only way to have a component pull focus upon rendering. See React.createRef() and componentDidMount()
- Forms should be submitted with a custom handleSubmit function as their onSubmit property.
- A single source of truth should be maintained in the form component's state and passed down to controlled components
- setTimeout() has constrained use in React compared to vanilla JS because it must be nested in useState()
- Certain form elements have special considerations in React (textarea, checkbox, radio button, select).
- Prevent default validation indicators by giving form noValidate property (novalidate in vanilla HTML).
- Custom validation indicators and hints can be conditionally rendered based off of the validation state tracked in the form component.

## CSS
- How to use min(), max(), and calc()
- How to use media queries
- The advantages of CSS background animation vs .mp4 and .gif
- {display: none} does not save the space where the element was, but {visibility: hidden} does.

## Misc
- How to host a React app on Github
- How to implement svg logos
