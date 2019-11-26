import React, { Component } from 'react';
import mainContainer from './MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <mainContainer/>
      </div>
    )
  }
}

export default App;