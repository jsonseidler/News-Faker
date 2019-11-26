import React from 'react';
import NewsItem from './NewsItem.jsx';

const NewsFeed = (props) => {
  const display = props.props.newsObjs.map((el, i) =>{
    return <NewsItem key={`item${i}`} link={el}/>
  })
    return (
      <div>
      {display}
      </div>
  )
}

export default NewsFeed;