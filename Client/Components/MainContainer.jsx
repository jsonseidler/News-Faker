import React, { Component } from 'react';
import Newsfeed from './NewsFeed';
import Box from './Box';

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newsObjs: [],
    }
  }

  render() {
    <div>
      <Newsfeed {...props}/>
      <Box {...props}/>
    </div>
  }
}

export default MainContainer;