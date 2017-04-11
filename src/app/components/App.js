import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  // Using babel transform-class-properties we can define class properties
  // at the top to make it easy for developers to understand context
  state = {
    info: 'Uses component level state',
    isFetching: false,
    data: [],
  }

  // Proptypes is now its own npm package to use type checking on props received
  static propTypes = {
    prop: PropTypes.string,
  }

  // put constructor if needed below static properties and before lifecycle methods
  constructor(props) {
    super(props)
    // can declare state in constructor too
    // this.state = {
    //  info: 'Uses component level state',
    //  isFetching: false,
    //  data: [],
    // }

    // Declare all functions passed to events as callbacks and bound to this state
    this.handleClick = this.handleClick.bind(this)
  }

  // Put lifecycle methods above render

  // Mounting lifecycle
  componentWillMount() {}
  componentDidMount() {}

  // Updating lifecycle
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  // Unmounting lifecycle
  componentWillUnmount() {}

  // Only required function
  render() {

    // use destructuring to declare what variables will be used inside function
    const { info } = this.state

    // include external styles here so if ever turned into universal loading it
    // wont be used on render server
    const styles = require('../../scss/app.scss')

    return (
      <div className='app'>
        <h1>Simple React App - No Redux</h1>
        <p>{this.renderInfo(info)}</p>
        <div>
          <button
            onClick={ (e) => { this.handleClick(e) }}
          >
          Button
        </button>
      </div>
      </div>
    )
  }

  // I put subsequent functions below render so script context can be easily viewed
  // this is possible since functions are loaded into memory first
  renderInfo(info) {
    return (info)
  }

  handleClick(e) {
    console.log('button clicked')
  }
}

// Export default and object for imports. When using redux and testing the
// object method can be used to circumvent Redux HOC
export { App }
export default App
