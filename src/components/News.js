import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-8'>
      {/* classname = container likhte hi margin aa jayega
      aur my-3 likhte hi y mein 3 ka margin aa jayega */}
        {/* This is my news componenet */}
        <h1>News Monkey-Top headlines</h1>
        <div className="row">
        {/* type in div.row and get this <div className="row"></div> */}
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description"/>
        {/* you know what time is this?--passing prop time */}
        </div>
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description"/>
        </div>
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description"/>
        </div>
        </div>
        

      </div>
    )
  }
}

export default News